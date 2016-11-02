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
  (function() {
    var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;
    var postMessage = '';
    postMessage += '@here\n';
    postMessage += 'みなさま、午前の PR 確認タイムですヨ。\n';
    postMessage += '┏┫￣皿￣┣┛';
    cron.schedule(
      '0 0 11 * * 1-5',
      function() {
        robot.logger.info('Post the morning PR Check!');
        return robot.send({ room: postRoom }, postMessage);
      }
    );
  })();

  (function() {
    var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;
    var postMessage = '';
    postMessage += '@here\n';
    postMessage += 'みなさま、午後の PR 確認タイムですヨ。\n';
    postMessage += '┏┫￣皿￣┣┛';
    cron.schedule(
      '0 0 14 * * 1-5',
      function() {
        robot.logger.info('Post the afternoon PR Check!');
        return robot.send({ room: postRoom }, postMessage);
      }
    );
  })();
};
