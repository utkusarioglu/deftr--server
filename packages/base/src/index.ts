require('dotenv').config({
  path: require('path').join(__dirname, '../../../.env'),
});
import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ServerResponse } from '@deftr/api';
import { createMockUsers } from '@deftr/server-mock-data';
import { enableAuth, enableSession } from '@deftr/server-auth';

const { HTTP_PORT } = process.env;

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
enableSession(app);

app.listen(HTTP_PORT, () => {
  console.log(`App is listening on ${HTTP_PORT}`);
});

enableAuth(app);

createMockUsers();
