const { Database, aql } = require('arangojs');
const {username, password} = require('./arango_config');

const db = new Database({
  url:"http://localhost:8529"
});

db.useDatabase("bestNearby");
db.useBasicAuth(username, password);

const findAttraction = async function(id) {
  const search = `nearBy/${id}`;
  try {
    const cursor = await db.query(aql`
      RETURN DOCUMENT (${search})
    `);

    const result = await cursor.next();
    return result;
  } catch (err) {
    console.log('Document not found because: ', err);
  }
}

module.exports.findAttraction = findAttraction;

