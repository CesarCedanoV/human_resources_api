const payrollController = require('../controlles/payrollController');




module.exports.setPayroll = async (req, res, next) => {
  const { payroll } = req.body.payroll; 
  if (typeof(payroll) === 'string') {  
    try{
      payroll =  await payrollController.getPayrollByTemplateCode(payroll);
      next();
    } catch(err) {
      return err;
    }
  }
  if (payroll === null) {
    return res.status(400).send(`Payroll is required to save an Employee`);
  }
}