const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routehandlers.js');

const router = express.Router();

const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();

app.use('/:attractionId/bestNearby', express.static(dist));
app.use(bodyParser.json());
app.use(router);

app.get('/:attractionId/api/nearbyattractions', routes.findAttractionById);

const port = 3003;

app.listen(port, () => console.log('server is listening on port: ', port));

module.exports = app;
