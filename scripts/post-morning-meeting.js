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
  postMessage += 'みなさま、オハヨウゴザイマス。\n';
  postMessage += 'もうすぐ朝会の時間ですヨ。\n';
  postMessage += '\n';
  postMessage += '┏┫￣皿￣┣┛ .｡oO（祝日だったらゴメンナサイ）';
  cron.schedule(
    '0 25 9 * * 1-5',
    function() {
      robot.logger.info('Post the Morning Meeting!');
      return robot.send({ room: postRoom }, postMessage);
    }
  );
};
