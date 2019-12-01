import Express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import routes from './routes';
import User from './models';

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.send(users);
});

app.listen(config.app.port, () => {
  console.log(`server started at http://localhost:${config.app.port}`);
});
