const mongoose = require('mongoose');
const { Schema } = mongoose;

const payrollSchema = new Schema({
  template_code:{
    type: String,
    maxlength: 5,
    require:false,
    unique:true,
    trim:true
  },
  anual_salary:{
    type: Number,
    require: true
  },
  pay_period: {
    type: String,
    require: true,
    enum:['Monthly', 'Semi-Monthly','Weekly','Bi-Weekly'],
    default: 'Monthly'
  },
  payments_history: {
    type: [{
      amount: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true,
        maxlength: 100
      },
      expected_date: {
        type: Date, 
        required: true,
        default: new Date()
      },
      paid_out: {
        type: Boolean,
        required: true,
        default:false
      }
    }]
  },
  other_benefits:{
    type: [String],
    require:false
  }
});



mongoose.model('payroll',payrollSchema);