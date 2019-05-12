module.exports.NewErrorMessage = (message, context) => {
  return {
    "error_message":message,
    "api_context":context
  }
}