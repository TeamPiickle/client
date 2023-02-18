import Compressor from "compressorjs";

interface CompressorImageOption {
  maxWidth: number;
  maxHeight: number;
  quality?: number;
}

// TODO :: File | Blob 호환성
export default function compressImage(file: File, option?: CompressorImageOption): Promise<File> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      maxWidth: option?.maxWidth,
      maxHeight: option?.maxHeight,
      quality: option?.quality ?? 0.6,

      success: (result) => {
        // if(result instance File)
        resolve(new File([result], file.name));
      },
      error: (result) => {
        reject(result);
      },
    });
  });
}
