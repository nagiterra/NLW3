import express from 'express';
import path from 'path';
import 'express-async-errors';

import cors from 'cors';

//conections
import './database/connections';

//routes
import routes from './routes';
import errorHanlder from './errors/handler';


//app
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHanlder);


app.listen(3333);