const express = require("express");
const router = express.Router();

const UsersControllers = require("../controllers/users");

// register router
router.post("/signup", (req, res, next) => {
  UsersControllers.SignUpUser(req.body)
  .then((data) => {
    res.json({"message": "user signed up successfully!"})
  })
  .catch((err) => {
    next(err)
  })
});

// login router
router.post('/login', (req, res, next) => {
  UsersControllers.loginUser(req.body)
  .then((data) => {
    res.json({"message": "user login successfully", data})
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;