declare global {
  namespace NodeJS {
    /**
     * Custom environment variables used by the server
     */
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      HTTP_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASS: string;
      POSTGRES_DB: string;
      // NODE_ENV: string;
    }
  }

  // interface Window {
  //   config: {
  //   };
  // }
}

export {};
