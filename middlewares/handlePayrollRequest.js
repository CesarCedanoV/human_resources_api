const objectManipulation = require('../util/objectManipulation');

module.exports.compareTemplateCode =  async (req, res, next) => {
  const templateCodeParams = req.params.template_code;
  const templateCodeBody = objectManipulation.setKeysToLowerCase(req.body).template_code

  if (templateCodeParams !== templateCodeBody ){
    return res.status(400).send(`Payroll template_code (${templateCodeBody}) in the Body is not equal to the template_code (${templateCodeParams}) in the URL`)
  }

  next()
}


module.exports.validTemplateCode =  async (req, res, next) => {
  const template_code = objectManipulation.setKeysToLowerCase(req.body).template_code
  if ( template_code == null || template_code.trim() == ""){
    return res.status(400).send(`Invalid or Empty Template Code`)
  }

  next();
}

