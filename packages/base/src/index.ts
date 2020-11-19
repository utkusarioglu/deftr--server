import Express, { Request, Response } from 'express';
import cors from 'cors';
import { ServerResponse } from '@newspaper/api';

const app = Express();
app.use(cors());

app.use('/:request', (req: Request, res: Response) => {
  const response: ServerResponse = {
    test: req.params.request,
    response: req.params.request.slice(-2),
  };
  res.send(JSON.stringify(response));
});
const HTTP_PORT = 4000;
app.listen(HTTP_PORT, () => {
  console.log(`App is listening on ${HTTP_PORT}`);
});
