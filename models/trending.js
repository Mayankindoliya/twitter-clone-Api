const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trendingSchema = new Schema({
  category: String,
  hashtag: String,
  tweets_count: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('trendings',trendingSchema)