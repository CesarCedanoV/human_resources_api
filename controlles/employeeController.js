const mongoose = require('mongoose');

const Employee = mongoose.model('employee');

module.exports.hire_employee = async (req,res) => {
  await new Employee({...req.body})
    .save((err, doc)=> {
      err ? res.status(400).json(err) : res.send(doc);
    });
}

module.exports.get_all_employee = async (req,res) => {
  await Employee.find( (err, docs) => {
    err ? res.status(500).json(err) : res.send(docs);
  });
}

module.exports.get_employee_by_employee_code =  async (req,res) => {
  const { employee_code } = req.params;
  await Employee.findOne({ employee_code }, (err,doc)=>{
    err ? res.status(400).json(err) : res.send(doc);
  });
}

module.exports.update_employee = async (req,res) => {
  const { _id } = req.params;
  await Employee.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true}, (err,doc)=>{
     err ? res.status(400).json(err) : res.send(doc);
  });
}

module.exports.delete_employee = async (req,res) => {
  const {_id, employee_code} = req.body;
  if (!_id) { return res.status(400).send(
    {
    'error_message':'_id is required to delete an Employee', 
    'api_context':'employeeController.delete_employee'
    }
  )};
  if (!employee_code) { return res.status(400).send(
    {
    'error_message':'employee_code is required to delete an Employee', 
    'api_context':'employeeController.delete_employee'
    }
  )};
  await Employee.findOneAndDelete({_id,employee_code}, {rawResult:true},(err,doc)=> {
    err ? res.status(500).json(err) : res.send(doc);
  });
}
