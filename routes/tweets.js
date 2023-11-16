const express = require("express");
const router = express.Router();
const TweetsControllers = require('../controllers/tweets')

 // Route handler for tweets 
router.post('/tweets', (req, res, next) => {
  TweetsControllers.createTweet(req.body, req.user)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/tweets', (req, res, next) => [
  TweetsControllers.getTweets(req.user)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      next(err)
    })
]);

module.exports = router