const mongoose = require('mongoose');

const Employee = mongoose.model('employees');

module.exports = app => {

  app.get('/api/employees/all', async (req,res) => {
    try{
      const employees = await Employee.find();
      res.send(employees);
    }catch(err){
      res.status(500).json(err);
    }

  });

  app.post('/api/employees/hire',  async (req,res) => {
    
    const employee = new Employee({...req.body});

    // Missing some employee validation

    try {
      const newEmployee = await employee.save();
      res.send(newEmployee);
    }catch(err){
      res.status(400).json(err);
    }

  });

}