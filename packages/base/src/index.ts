import Express from 'express';

const app = Express();

app.use('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('App is listening');
});
