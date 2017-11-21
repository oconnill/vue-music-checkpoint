var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

var schema = new Schema({
    title: { type: String, required: true },
    albumArt: { type: String, required: true, unique: true, dropDups: true },
    artist: { type: String, required: true },
    price: { type: String, required: true },
    preview: { type: String, required: true },
    playlist: {type: ObjectId, required: true }
  })