import Express from 'express';
import bodyParser from 'body-parser';
import config from '../config';

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.PORT, () => {
  console.log('server started...');
});
