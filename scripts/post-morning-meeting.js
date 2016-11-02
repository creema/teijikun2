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
  var postRoom = process.env.HUBOT_SLACK_MORNING_MEETING_ROOM;
  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさん、オハヨウゴザイマス。\n';
  postMessage += '朝会の時間ですヨ。';
  cron.schedule(
    '0 30 9 * * 1-5',
    function() {
      robot.logger.info('Post the Morning Meeting!');
      return robot.send({ room: postRoom }, postMessage);
    }
  );
};
