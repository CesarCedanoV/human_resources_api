const mongoose = require('mongoose');
const { Schema } = mongoose;

const groupSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  required_roles:{
    type: [{
      role: {      
        type:Schema.Types.ObjectId, 
        ref:'role',
        required:true
      },
      amount: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: 0
      }
    }]
  },
  members: {
    type: [{     
      type:Schema.Types.ObjectId, 
      ref:'employee',
      required:true
    }]
  }
});


mongoose.model('group', groupSchema);