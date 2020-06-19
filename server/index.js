const express = require('express');
const path = require('path');
const router = express.Router();
const db = require('../database/nearbyattractions.js');
const bodyParser = require('body-parser'); 
const morgan = require('morgan');

const dist = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();
const port = 3003

app.use(express.static(dist));
app.use(bodyParser.json());
app.use(router);

//if attractionId is not found in db a value of null is returned and not caught in catch block 
app.get('/api/nearbyattractions/:attractionId', (req, res) => {
  let attractionID = req.params.attractionId;
  db.findAttraction(attractionID)
    .then((data) => {
        console.log(data);
        res.status(200);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(404);
    })
})

app.listen(port, () => console.log('server is listening on port: ', port));


