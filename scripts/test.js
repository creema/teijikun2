// Description:
//   朝会の時間を告げる投稿をおこなう
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
  var postRoom = process.env.HUBOT_SLACK_TEST_POST_ROOM;
  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさん、テスト投稿ですよ。';
  cron.schedule(
    '0 6 23 * * 1-5',
    function() {
      robot.logger.info('Post a test message!');
      return robot.send({ room: postRoom }, postMessage);
    }
  );
};
