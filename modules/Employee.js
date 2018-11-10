const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const employeeSchema = new Schema({
  national_identifier: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  employee_code:{
    type: String,
    required: true,
    minlength: 4,
    unique: true,
    uppercase: true,
    trim: true
  },
  position:{
    type: String,
    required: true
  },
  anual_salary:{
    type: Number,
    required: true
  },
  hired_date:{
    type: Date,
    required: true,
    default: new Date()
  },
  status:{
    type: String,
    required: true,
    enum:['Active','Inactive'],
    default: 'Active'
  }
});

mongoose.model('employees', employeeSchema);