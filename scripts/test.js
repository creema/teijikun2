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

var CronJob = require('cron').CronJob;

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_TEST_POST_ROOM;

  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさん、テスト投稿ですよ。';

  new CronJob(
    '00 10 10 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post a test message!');
    },
    null,
    true,
    'Asia/Tokyo'
  );
};
