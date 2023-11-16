const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  description: String,
  user: {type: Schema.Types.ObjectId, ref: 'users'},
  likes: Number,
  comments: Number,
  retweets: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('tweets', tweetSchema);