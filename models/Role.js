const mongoose = require('mongoose');
const { Schema } = mongoose;

const Role = new Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
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