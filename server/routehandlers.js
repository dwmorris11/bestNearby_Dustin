const { findAttraction } = require('../database/ArangoReseed/index');

module.exports.findAttractionById = async (req, res, testCallback) => {
  const attractionId = req.params.attractionId;
  console.log(attractionId)
  findAttraction(attractionId)
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
