import { IStorageService } from "./IStorageService.js";
import { S3StorageService } from "./S3StorageService.js";
import { LocalStorageService } from "./LocalStorageService.js";

export class StorageFactory {
  private static instance: IStorageService | null = null;

  public static getStorage(): IStorageService {
    if (!this.instance) {
      const hasAwsConfig =
        !!process.env.AWS_ACCESS_KEY_ID &&
        !!process.env.AWS_SECRET_ACCESS_KEY &&
        !!process.env.AWS_S3_BUCKET;

      if (hasAwsConfig) {
        try {
          this.instance = new S3StorageService();
          console.log("☁️ StorageFactory: AWS S3 Cloud Storage initialized.");
        } catch (err: any) {
          console.warn(`⚠️ StorageFactory: AWS S3 init failed (${err.message}). Falling back to Local Storage.`);
          this.instance = new LocalStorageService();
        }
      } else {
        console.log("📁 StorageFactory: AWS S3 not configured. Using Local Storage (uploads/).");
        this.instance = new LocalStorageService();
      }
    }

    return this.instance;
  }
}
