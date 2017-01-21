// Description:
//   お風呂チェック
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot お風呂 - returns Parupunte

var Common = require('./lib/common');

module.exports = function(robot) {
  var postMessage ='';

  Common.loadView(
    'ofuro-check.ejs',
    {},
    function(result) {
      postMessage = result;
      robot.logger.info('Posted a reply message from', __filename);
    },
    function(result, error) {
      robot.logger.error('Failed post on', __filename, 'result=', result, 'error=', error);
    }
  );

  robot.respond(/(お(風呂|ふろ|フロ)|オフロ|o[fh]uro|Bathroom)/i, function(res) {
    robot.logger.info('Received request on', __filename);
    res.send(postMessage);
    robot.logger.info('Posted a reply message from', __filename);
  });
};
