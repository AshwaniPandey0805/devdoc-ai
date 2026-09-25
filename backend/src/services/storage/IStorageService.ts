import { Readable } from "stream";

export interface UploadResult {
  key: string;               // S3 object key or relative local path
  storageType: "s3" | "local";
  bucket?: string;
  region?: string;
}

export interface IStorageService {
  readonly storageType: "s3" | "local";

  /**
   * Uploads a file from a local path to storage (S3 or local disk).
   */
  uploadFile(
    localFilePath: string,
    fileName: string,
    mimeType: string,
    userId: string
  ): Promise<UploadResult>;

  /**
   * Returns a readable stream of the stored file.
   */
  getFileStream(key: string): Promise<Readable>;

  /**
   * Downloads the stored object to a local temporary path for parser consumption.
   */
  downloadToTempFile(key: string): Promise<string>;

  /**
   * Generates a secure, time-limited presigned URL for downloading or previewing.
   */
  getSignedDownloadUrl(key: string, expiresInSeconds?: number): Promise<string>;

  /**
   * Deletes a stored file.
   */
  deleteFile(key: string): Promise<void>;
}
