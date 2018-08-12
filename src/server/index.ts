import express from 'express';
import {Server} from 'typescript-rest';
import { PhonesController } from './controllers';


const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
};

const app: express.Application = express();

app.use(cors);
Server.buildServices(app, PhonesController);

app.listen(8080, () => console.log('Rest Server listening on port 8080'));
