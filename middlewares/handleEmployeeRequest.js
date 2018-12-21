const payrollController = require('../controlles/payrollController');




module.exports.setPayroll = async (req, res, next) => {
  const { payroll } = req.body
  if (typeof(payroll) === 'string') {  
    try{
      req.body.payroll = await payrollController.getPayrollBytemplateCode(payroll);
      console.log(payroll);
    } catch(error) {
      return res.status(400).json(error)
    }
  }
  if (payroll === null) {
    return res.status(400).send(`Payroll is required to save an Employee`);
  }
  next();
}