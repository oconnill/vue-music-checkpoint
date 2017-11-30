var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    title: { type: String},
    albumArt: { type: String},
    artist: { type: String},
    price: { type: String},
    preview: { type: String},
    playlist: {type: ObjectId }
  })


  module.exports = mongoose.model('Song', schema)