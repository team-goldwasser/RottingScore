var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var criticSchema = new Schema({
    id: false,
    _id: Number,
    top_critic: {
      type: Number,
      default: null,
      min: 0,
      max: 1
    },
    name: {
      type: String,
      default: null
    },
    img_url: String,
    organization: {
      type: String,
      default: null
    },
  });

  module.exports = mongoose.model('critics', criticSchema);