const employeeController = require('../controlles/employeeController'); 

module.exports = app => {
  
  app.post('/api/employee/hire', employeeController.hire_employee);

  app.get('/api/employee/all', employeeController.get_all_employee);

  app.get('/api/employee/getby/employeecode=:employee_code', employeeController.get_employee_by_employee_code);

  app.put('/api/employee/update/:_id', employeeController.update_employee);

  app.delete('/api/employee/fire/:_id', employeeController.delete_employee);
}
