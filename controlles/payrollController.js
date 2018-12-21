const mongoose = require('mongoose');

const Payroll = mongoose.model('payroll');

module.exports.insert_payroll_template = async (req, res) => {
  console.log(req.body)
  try{
    await new Payroll({...req.body})
      .save((err, doc) => {
        err ? res.status(400).json(err) : res.send(doc);
    });
  } catch(error){
    console.log(error);
    return res.status(400).send(error)
  }
  
}

module.exports.update_payroll_template = async (req, res) => {
  const { template_code } = req.params;
  await Payroll.findOneAndUpdate({template_code},req.body,  {new:true, runValidators:true},(err, doc)=>{
    err ? res.status(500).json(err) : res.send(doc);
  });
}

module.exports.get_all_payroll_template = async (req, res) => {
  await Payroll.find({template_code:{$exists:true}},'-payments_history',(err, doc)=> {
    err ? res.state(500).json(err) : res.send(doc);
  });
}

module.exports.get_payroll_template_by_template_code = async (req, res) => {
  const { template_code } = req.params
  await Payroll.findOne({template_code}, '-payments_history', (err, doc) => {
    err ? res.status(400).json(err) : res.send(doc);
  });
}

module.exports.getPayrollBytemplateCode = async template_code => {
  return await Payroll.findOne( {template_code} )
    .exec()
    .then(doc => {
      if (!doc) return null;
      return doc;
    })
    .catch(err => {
      return err;
    });
}
