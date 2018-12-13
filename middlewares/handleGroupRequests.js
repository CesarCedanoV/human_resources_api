const { NewErrorMessage } = require('../util/errorMessage');
const objectManipulation = require('../util/objectManipulation');
const roleController = require('../controlles/roleController');

module.exports.validateGroup = async (req, res, next) => {
  const group = objectManipulation.setKeysToLowerCase(req.body);

  try {
    await setRequiredRoles(group);
    next();
  }catch(error){
    res.status(400).json(error.message)
  }
}


const setRequiredRoles = async obj => {
  obj.required_roles = await Promise.all( obj.required_roles.map( async el => {
    const validRole = await roleController.getRoleByCode(el.role);
    
    if (validRole === null) {
      throw new Error(`Role ${el.role} does not exist`);
    }
    el.role = validRole._id
  }));
}