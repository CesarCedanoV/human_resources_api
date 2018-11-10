const mongoose = require('mongoose');

const Employee = mongoose.model('employees');

module.exports = app => {

  app.post('/api/employees/hire',  async (req,res) => {
    await new Employee({...req.body})
      .save((err, doc)=> {
        err ? res.status(400).json(err) : res.send(doc);
      });
  });

  app.get('/api/employees/all', async (req,res) => {
    await Employee.find( (err, docs) => {
      err ? res.status(500).json(err) : res.send(docs);
    });
  });

  app.get('/api/employees/getby/employeecode=:employee_code', async (req,res) => {
    const { employee_code } = req.params;
    await Employee.findOne({ employee_code }, (err,doc)=>{
      err ? res.status(400).json(err) : res.send(doc);
    });
  });

  app.put('/api/employees/update/:_id', async (req,res) => {
    const { _id } = req.params;
    await Employee.findByIdAndUpdate(_id, req.body, {new:true}, (err,doc)=>{
       err ? res.status(400).send(err) : res.send(doc);
    });
  });

}