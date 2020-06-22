const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/nearbyattractions.js');
// const morgan = require('morgan');

const router = express.Router();
const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.static(dist));
app.use(bodyParser.json());
app.use(router);

// if attractionId is not found in db a value of null is returned and not caught in catch block
app.get('/api/nearbyattractions/:attractionId', (req, res) => {
  const attractionID = req.params.attractionId;
  db.findAttraction(attractionID)
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = app;