const mongoose = require('mongoose');

const Role = mongoose.model('role');

module.exports.insert_role = async(req,res) => {
  await new Role({...req.body})
    .save( (err,doc) =>{
      err ? res.status(400).json(err) : res.send(doc);
  });
};

module.exports.get_all_role = async (req,res) => {
  await Role.find( (err,doc)=>{
    err ? res.status(500).json(err) : res.send(doc);
  });
}

module.exports.update_role = async(req,res) => {
  const { _id } = req.body;
  await Role.findByIdAndUpdate(_id,req.body, {new:true, runValidators:true}, (err,doc) => {
    err ? res.status(400).json(err) : res.send(doc);
  }); 
}

module.exports.delete_role = async (req,res) => {
  const { label } = req.body;
  await Role.findOneAndDelete( {label}, {rawResult:true}, (err,doc) => {
    err ? res.status(400).json(err) : res.send(doc);
  });
}