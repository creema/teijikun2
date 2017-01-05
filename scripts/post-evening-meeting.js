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

var CronJob = require('cron').CronJob;

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_EVENING_MEETING_ROOM;

  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさま、オツカレサマデス。\n';
  postMessage += 'もうすぐ夕会の時間ですヨ。\n';
  postMessage += '\n';
  postMessage += '退勤対応、ｵﾜｽﾚﾅｷﾖｳ...\n';
  postMessage += '┏┫￣皿￣┣┛';

  new CronJob(
    '00 15 18 * * 1-5',
    //'00 26 00 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the Evening Meeting!');
    },
    null,
    true,
    'Asia/Tokyo'
  ).start();
};
