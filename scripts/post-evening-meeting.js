// Description:
//   夕会の時間を告げる投稿をおこなう
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
  var postRoom = process.env.HUBOT_SLACK_EVENING_MEETING_ROOM;
  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさん、オツカレサマデシタ。\n';
  postMessage += '夕会の時間ですヨ。';
  cron.schedule(
    '0 25 18 * * 1-5',
    function() {
      robot.logger.info('Post the Evening Meeting!');
      return robot.send({ room: postRoom }, postMessage);
    }
  );
};