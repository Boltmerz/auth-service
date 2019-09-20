import Express from 'express';
import bodyParser from 'body-parser';
import config from '../config';
import routes from './routes';

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(config.PORT, () => {
  console.log(`server started at http://localhost:${config.PORT}`);
});
