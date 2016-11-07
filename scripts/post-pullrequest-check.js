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

var CronJob = require('cron').CronJob;

module.exports = function(robot) {
  new CronJob(
    '00 00 11 * * 1-5',
    //'00 23 00 * * 1-5',
    function() {
      var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;

      var postMessage = '';
      postMessage += '@here\n';
      postMessage += 'みなさま、午前の PR 確認タイムですヨ。\n';
      postMessage += '┏┫￣皿￣┣┛';

      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the morning PR Check!');
    },
    null,
    true,
    'Asia/Tokyo'
  );

  new CronJob(
    '00 00 14 * * 1-5',
    //'00 24 00 * * 1-5',
    function() {
      var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;

      var postMessage = '';
      postMessage += '@here\n';
      postMessage += 'みなさま、午後の PR 確認タイムですヨ。\n';
      postMessage += '┏┫￣皿￣┣┛';

      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the afternoon PR Check!');
    },
    null,
    true,
    'Asia/Tokyo'
  );
};
