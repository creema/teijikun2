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
  var postRoom = process.env.HUBOT_SLACK_MORNING_MEETING_ROOM;

  var postMessage = '';
  postMessage += '@here\n';
  postMessage += 'みなさま、ｵﾊﾖｳｺﾞｻﾞｲﾏｽ。\n';
  postMessage += 'もうすぐ朝会の時間ﾃﾞｽﾖ。\n';
  postMessage += '\n';
  postMessage += 'ﾀｲﾑｶｰﾄﾞ、ｵﾜｽﾚﾅｷﾖｳ...\n';
  postMessage += '┏┫￣皿￣┣┛ .｡oO（祝日だったらゴメンナサイ）';

  new CronJob(
    '00 25 09 * * 1-5',
    //'00 25 00 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the Morning Meeting!');
    },
    null,
    true,
    'Asia/Tokyo'
  );
};
