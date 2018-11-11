const mongoose = require('mongoose');
const { Schema } = mongoose;

const Role = new Schema({
  label : {
    type:String,
    required:true
  },
  description : {
    type:String,
    required:true
  }
});

mongoose.model('role', Role);