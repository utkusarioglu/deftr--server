import Express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ServerResponse } from '@newspaper/api';
import { createUserRoles } from '@newspaper/server-mock-data';
import { enableAuth, enableSession } from '@newspaper/server-auth';

// const { HTTP_PORT } = process.env;
const HTTP_PORT = 4000;

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
enableSession(app);

createUserRoles();

app.listen(HTTP_PORT, () => {
  console.log(`App is listening on ${HTTP_PORT}`);
});

enableAuth(app);
