import express from 'express';
import expressWs from 'express-ws';
import { ServerResponse } from '@deftr/public-api';

const router = express.Router() as expressWs.Router;

// !TODO
router.ws('/', (ws, req) => {
  ws.on('message', (msg: string) => {
    console.log('ws message', msg, req.cookies);
    try {
      const message: ServerResponse = JSON.parse(msg);
    } catch (e) {
      console.warn('A faulty request was made:\n', e);
    }
  });
});

export default router;
