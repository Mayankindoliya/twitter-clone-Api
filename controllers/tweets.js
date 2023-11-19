const Trending = require('../models/trending');
const Tweets = require('../models/tweets')

module.exports = class TweetsControllers {

   // Create Tweet:
   static async createTweet(document, user) {
    if (!user) {
      throw new Error("user not Found")
    }
    document.user = user;
    return Tweets.create(document)
  };

  //Retrieve all tweets:
  static async getTweets() {
    return await Tweets.find({}, "")
      .populate('user', '_id fullname username')
      .sort({updated_at: -1})
      .lean()
  }

  static async getTrending() {
    return Trending.find({}).lean();
  }

}