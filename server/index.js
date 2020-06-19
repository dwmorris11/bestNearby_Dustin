const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const bodyParser = require('body-parser');

const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();
const port = 3003

app.use(express.static(dist));
app.use(bodyParser.json());

app.post('/')

app.listen(port, () => console.log('server is listening on port: ', port));


