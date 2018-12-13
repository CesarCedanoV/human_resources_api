const mongoose = require('mongoose');
const Group = mongoose.model('group');

module.exports.create_group = async (req, res) => {
  try{
    await new Group({...req.body})
      .save((error, doc) => {
        error ? res.status(400).json(error) : res.send(doc);
      });
  }catch (error){
    console.log(error)
    return res.status(400).json(error);
  }
}

module.exports.get_all_group = async (req,res) => {
  await Group.find( (err, docs) => {
    err ? res.status(500).json(err) : res.send(docs)
  })
  .populate('required_roles.role');
}