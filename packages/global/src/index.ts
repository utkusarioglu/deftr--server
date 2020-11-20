declare global {
  namespace NodeJS {
    /**
     * Custom environment variables used by the server
     */
    interface ProcessEnv {
      HTTP_PORT: number;
      POSTGRES_USER: string;
      POSTGRES_PASS: string;
      POSTGRES_DB: string;
      NODE_ENV: string;
    }
  }

  // interface Window {
  //   config: {
  //   };
  // }
}

export {};
