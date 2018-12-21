const payrollController = require('../controlles/payrollController');
const handlePayrollRequests = require('../middlewares/handlePayrollRequest');

module.exports = app => {
  app.get('/api/payroll/template/all',  payrollController.get_all_payroll_template);
  
  app.post('/api/payroll/template/insert', handlePayrollRequests.validTemplateCode, payrollController.insert_payroll_template);
  
  app.put('/api/payroll/template/update', handlePayrollRequests.validTemplateCode,handlePayrollRequests.compareTemplateCode, payrollController.update_payroll_template);

  app.get('/api/payroll/template/templatecode=:template_code', payrollController.get_payroll_template_by_template_code);
}