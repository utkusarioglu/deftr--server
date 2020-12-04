require('dotenv').config({
  path: require('path').join(__dirname, '../../../.env'),
});
import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createMockUsers } from '@deftr/server-mock-data';
import { enableAuth, enableSession } from '@deftr/server-auth';
import expressWs from 'express-ws';

const { SERVER_PORT } = process.env;
const { app } = expressWs(Express());

import websocketRouter from './routes/websocket';
import restRouter from './routes/rest';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
enableSession(app);

app.use('/ws', websocketRouter);
app.use('/rest', restRouter);

app.listen(SERVER_PORT, () => {
  console.log(`App is listening on ${SERVER_PORT}`);
});
