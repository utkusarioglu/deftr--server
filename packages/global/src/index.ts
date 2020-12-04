declare global {
  namespace NodeJS {
    /**
     * Custom environment variables used by the server
     */
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      SERVER_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASS: string;
      POSTGRES_DB: string;
    }
  }

  // interface Window {
  //   config: {
  //   };
  // }
}

export {};
