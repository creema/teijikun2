module.exports.loadView = function(viewName, options, success, failed) {
  var ejs = require('ejs');
  ejs.renderFile(
    __dirname + '/../../views/' + viewName,
    options,
    function(error, result) {
      if (!error && result) {
        success(result);
      } else {
        failed(result, error);
      }
    }
  );
};
