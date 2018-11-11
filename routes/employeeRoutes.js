const employeeController = require('../controlles/employeeController'); 

module.exports = app => {
  
  app.post('/api/employees/hire', employeeController.hire_employee);

  app.get('/api/employees/all', employeeController.get_all_employees);

  app.get('/api/employees/getby/employeecode=:employee_code', employeeController.get_employee_by_employee_code);

  app.put('/api/employees/update/:_id', employeeController.update_employee);

  app.delete('/api/employees/fire/:_id', employeeController.delete_employee);
}
