const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    title:  String,
    level: String,
  }, { collection: 'skills'})

  const skills = mongoose.model('Skills', skillSchema);

module.exports = skills