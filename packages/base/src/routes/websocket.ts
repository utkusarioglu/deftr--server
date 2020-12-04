import express from 'express';
import expressWs from 'express-ws';
import { ServerResponse } from '@deftr/public-api';

const router = express.Router() as expressWs.Router;

router.ws('/', (ws, req) => {
  ws.on('message', (serializedMessage: string) => {
    try {
      const message: ServerResponse = JSON.parse(serializedMessage);
      console.log('websocket message:\n', message);
    } catch (e) {
      console.warn('A faulty request was made:\n', e);
    }
  });
});

export default router;
