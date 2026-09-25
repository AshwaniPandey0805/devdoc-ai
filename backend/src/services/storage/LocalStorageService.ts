import fs from "fs/promises";
import { createReadStream } from "fs";
import { Readable } from "stream";
import path from "path";
import { IStorageService, UploadResult } from "./IStorageService.js";

export class LocalStorageService implements IStorageService {
  readonly storageType = "local" as const;

  public async uploadFile(
    localFilePath: string,
    _fileName: string,
    _mimeType: string,
    _userId: string
  ): Promise<UploadResult> {
    return {
      key: localFilePath,
      storageType: "local",
    };
  }

  public async getFileStream(key: string): Promise<Readable> {
    return createReadStream(key);
  }

  public async downloadToTempFile(key: string): Promise<string> {
    // Already a local file on disk
    return key;
  }

  public async getSignedDownloadUrl(key: string, _expiresInSeconds = 3600): Promise<string> {
    // In local mode, returns direct server static URL or local path indicator
    return `/api/documents/raw/${encodeURIComponent(path.basename(key))}`;
  }

  public async deleteFile(key: string): Promise<void> {
    try {
      await fs.unlink(key);
    } catch (err: any) {
      if (err.code !== "ENOENT") {
        console.warn(`[LocalStorageService] Could not delete ${key}:`, err.message);
      }
    }
  }
}
