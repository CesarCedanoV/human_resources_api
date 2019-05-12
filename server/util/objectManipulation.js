module.exports.setKeysToLowerCase = obj => {
  return Object.keys(obj)
    .reduce( (newObj, key) => (newObj[key.toLowerCase()] = obj[key], newObj), {});
}