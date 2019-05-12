const employeeController = require('../controlles/employeeController'); 
const handleEmployeeRequests = require('../middlewares/handleEmployeeRequest');

module.exports = app => {
  
  app.post('/api/employee/hire',handleEmployeeRequests.setPayroll, employeeController.hire_employee);

  app.get('/api/employee/all', employeeController.get_all_employee);

  app.get('/api/employee/getby/employeecode=:employee_code', employeeController.get_employee_by_employee_code);

  app.put('/api/employee/update/:_id', handleEmployeeRequests.setPayroll, employeeController.update_employee);

  app.delete('/api/employee/fire/:_id', employeeController.delete_employee);
}
