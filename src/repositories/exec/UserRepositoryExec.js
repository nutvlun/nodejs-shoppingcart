const models = require("../../../models");

async function create(obj) {
  const user = await models.User.create(
    {
      'userName': obj.username,
      'password': obj.password,
      'email': obj.email
    }
  )
  return user.id;
}

module.exports = {
  create
}