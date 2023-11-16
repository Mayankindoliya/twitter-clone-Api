const Users = require('../models/users')
const Jwt = require('./jwt')

//Token verification middleware:
async function authenticationMiddleware(req, res, next) {
  const authHeader = req.headers.authorization
  try {
    //verify the Token:
    if (authHeader) {
      const token = authHeader.split(" ")[1]
      const payload = Jwt.verifyJwt(token)
      const user = await Users.findOne({ _id: payload._id }, "email fullname").lean()
      user.id = user._id
      req.user = user
    }
    next();  //goes to the next middleware or goes to the REST API:

  } catch (err) {
    console.log('error during authentication')
    next(err)
  }
}

// Error Handling Middleware:
function errorHandlersMiddleware(err, req, res, next) {
 console.log(err)
 res.status(500).json({"message": err.message, "stack": err.stack})
};

module.exports = {
  errorHandlersMiddleware,
  authenticationMiddleware
}