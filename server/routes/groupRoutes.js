const groupController = require('../controlles/groupController');
const handleGroupRequests = require('../middlewares/handleGroupRequests');

module.exports = app => {  
  app.get('/api/group/all', groupController.get_all_group);
  
  app.post('/api/group/insert', handleGroupRequests.validateGroup, groupController.create_group);
}