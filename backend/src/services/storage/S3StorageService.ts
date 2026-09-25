import {
  S3Client,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Upload } from "@aws-sdk/lib-storage";
import { createReadStream } from "fs";
import fs from "fs/promises";
import path from "path";
import os from "os";
import { Readable } from "stream";
import { IStorageService, UploadResult } from "./IStorageService.js";

export class S3StorageService implements IStorageService {
  readonly storageType = "s3" as const;
  private s3: S3Client;
  private bucket: string;
  private region: string;

  constructor() {
    this.region = process.env.AWS_REGION || "us-east-1";
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const bucket = process.env.AWS_S3_BUCKET;

    if (!accessKeyId || !secretAccessKey || !bucket) {
      throw new Error(
        "AWS S3 environment variables (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_S3_BUCKET) are not fully configured"
      );
    }

    this.bucket = bucket;
    this.s3 = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  public async uploadFile(
    localFilePath: string,
    fileName: string,
    mimeType: string,
    userId: string
  ): Promise<UploadResult> {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(fileName).toLowerCase();
    const key = `users/${userId}/documents/${uniqueSuffix}${ext}`;

    const fileStream = createReadStream(localFilePath);

    const parallelUpload = new Upload({
      client: this.s3,
      params: {
        Bucket: this.bucket,
        Key: key,
        Body: fileStream,
        ContentType: mimeType,
        Metadata: {
          originalName: fileName,
          uploadedBy: userId,
        },
      },
    });

    await parallelUpload.done();

    // Clean up local staging file once uploaded to S3
    try {
      await fs.unlink(localFilePath);
    } catch (err: any) {
      console.warn(`[S3StorageService] Could not clean up local staging file ${localFilePath}:`, err.message);
    }

    return {
      key,
      storageType: "s3",
      bucket: this.bucket,
      region: this.region,
    };
  }

  public async getFileStream(key: string): Promise<Readable> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    const response = await this.s3.send(command);
    return response.Body as Readable;
  }

  public async downloadToTempFile(key: string): Promise<string> {
    const stream = await this.getFileStream(key);
    const tempDir = os.tmpdir();
    const tempPath = path.join(tempDir, `s3-${Date.now()}-${path.basename(key)}`);

    const chunks: Buffer[] = [];
    for await (const chunk of stream) {
      chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
    }
    await fs.writeFile(tempPath, Buffer.concat(chunks));
    return tempPath;
  }

  public async getSignedDownloadUrl(key: string, expiresInSeconds = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    return getSignedUrl(this.s3, command, { expiresIn: expiresInSeconds });
  }

  public async deleteFile(key: string): Promise<void> {
    const command = new DeleteObjectCommand({
      Bucket: this.bucket,
      Key: key,
    });
    await this.s3.send(command);
  }
}
