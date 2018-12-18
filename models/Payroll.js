const mongoose = require('mongoose');
const { Schema } = mongoose;

const payrollSchema = new Schema({
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
    type: [paymentSchema]
  }
});


const paymentSchema = new Schema({
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
});

mongoose.model('payroll',payrollSchema);