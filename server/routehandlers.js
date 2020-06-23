const db = require('../database/nearbyattractions.js');

module.exports.findAttractionById = (req, res, testCallback) => {
  const attractionID = req.params.attractionId;
  db.findAttraction(attractionID)
    .then((data) => {
      console.log(data);
      res.status(200);
      res.send(data);
      testCallback(null, data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
      testCallback(err);
    });
};

