interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SERVICE_URL: string;
  readonly VITE_KAKAO_CLIENT_ID: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_KAKAO_CLIENT_SECRET: string;
  readonly VITE_NAVER_CLIENT_ID: string;
  readonly VITE_NAVER_REDIRECT_URI: string;
  readonly VITE_NAVER_CLIENT_SECRET: string;
  readonly VITE_NAVER_STATE: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
