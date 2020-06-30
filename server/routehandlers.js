const db = require('../database/NearbyAttractions.js');

module.exports.findAttractionById = (req, res, testCallback) => {
  const attractionID = req.params.attractionId;
  console.log(attractionID)
  db.findAttraction(attractionID)
    .then((data) => {
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
