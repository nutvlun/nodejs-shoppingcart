const models = require("../../models");
const {hashPassword} = require("mysql/lib/protocol/Auth");

async function create() {
  const user = await models.User.create(
    {
      'userName': userName,
      'password': hashPassword(password),
      'email': email
    }
  )
  return user.id;
}