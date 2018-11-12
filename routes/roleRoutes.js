const roleController = require('../controlles/roleController');

module.exports = app => {
  app.get('/api/role/all', roleController.get_all_role);
  
  app.post('/api/role/insert', roleController.insert_role);
  
  app.put('/api/role/update', roleController.update_role);
  
  app.delete('/api/role/delete', roleController.delete_role);
}