import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import friends from './features/friends';
import places from './features/places';
import outputs from './features/outputs';
import './config/database'

const port = 3000;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/friends', friends);
app.use('/places', places);
app.use('/outputs', outputs);

app.listen(port, () => console.log(`Server running => ${port}`));