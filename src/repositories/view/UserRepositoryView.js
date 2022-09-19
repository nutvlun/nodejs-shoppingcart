const models = require("../../../models");

async function findByUsername(username) {
  return await models.User.findAll(
    {
      where:{
        'userName': username
      },
      raw : true
    }
  );
}

module.exports = {
  findByUsername
}