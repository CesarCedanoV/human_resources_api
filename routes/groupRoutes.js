const groupController = require('../controlles/groupController');

module.exports = app => {  
  app.get('/api/group/all', groupController.get_all_group);
  
  app.post('/api/group/insert', groupController.create_group);
}