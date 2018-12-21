const objectManipulation = require('../util/objectManipulation');
const roleController = require('../controlles/roleController');
const employeeController = require('../controlles/employeeController');

module.exports.validateGroup = async (req, res, next) => {
  const group = objectManipulation.setKeysToLowerCase(req.body);

  try {
    await setRequiredRoles(group);
    await setMembers(group);
    next();
  }catch(error){
    res.status(400).json(error.message)
  }
}


const setRequiredRoles = async obj => {
    obj.required_roles = await Promise.all( obj.required_roles.map( async el => {
    const validRole = await roleController.getRoleByCode(el.role.code);
    
    if (validRole === null) {
      throw new Error(`Role ${el.role.code} does not exist`);
    }
    el.role = validRole._id
  }));
}

const setMembers = async obj => {
    obj.members = await Promise.all( obj.members.map( async el => {
    const validEmployee = await employeeController.getEmployeeByEmployeeCode(el.employee_code);
    
    if (validEmployee === null) {
      throw new Error(`Employee ${el.employee_code} does not exist`);
    }
    el._id = validEmployee._id
  }));
}