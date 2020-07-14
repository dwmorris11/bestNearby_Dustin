

module.exports.findAttractionById = async (req, res, testCallback) => {
  const attractionID = req.params.attractionId;
  console.log(attractionID)
  //
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
