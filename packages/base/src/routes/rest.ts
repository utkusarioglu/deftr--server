import express from 'express';
import type { ServerResponse } from '@deftr/public-api';
const router = express.Router();

/**
 * Testing route with the clients
 *
 * @remarks
 * This is here to receive and send dummy data to the client
 */
router.get('/test', (_, res) => {
  const serverResponse: ServerResponse = {
    test: 'test received',
  };
  res.json(serverResponse);
});

/**
 * Login request endpoint
 */
router.post('/login', (req, res) => {
  console.log('rest login request', req.body);
  const serverResponse: ServerResponse = {
    login: req.body,
  };
  res.json(serverResponse);
});

export default router;
