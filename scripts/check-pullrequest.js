// Description:
//   プルリク確認時間を告げる投稿をおこなう
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None

var cron = require('node-cron');

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;
  var postMessage = '';
  postMessage += '@here みなさん、PR タイムですヨ。';
  cron.schedule(
    '0 0 11,14 * * 1-5',
    function() {
      robot.logger.info('Post the PR Check!');
      return robot.send({ room: postRoom }, postMessage);
    }
  );
};
