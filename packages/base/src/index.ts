import Express, { Request, Response } from 'express';
import cors from 'cors';
import { ServerResponse } from '@newspaper/api';
import { createUserRoles } from '@newspaper/server-mock-data';
import { something } from '@newspaper/server-auth';

// const { HTTP_PORT } = process.env;
const HTTP_PORT = 4000;

const app = Express();
app.use(cors());

createUserRoles();

app.use('/:request', (req: Request, res: Response) => {
  const response: ServerResponse = {
    test: req.params.request,
    response: something() + req.params.request.slice(-2),
  };
  res.send(JSON.stringify(response));
});

app.listen(HTTP_PORT, () => {
  console.log(`App is listening on ${HTTP_PORT}`);
});
