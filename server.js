import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import getMedianPrimeNumbers from './api/calculatePrimes';

const app = express();
const API_PORT = process.env.PORT || 5000;

// Configure API to use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
// Look for JSON data in request body
app.use(bodyParser.json());
app.use(logger('dev'));

// For production, serve static files from React App
app.use(express.static(path.join(__dirname, '/client/build')));

app.post('/api/get-nums', (req, res) => {
  const result = getMedianPrimeNumbers(req.body.value);
  res.send(result);
});

// Catches everything else—will send back React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
