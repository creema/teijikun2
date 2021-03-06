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
var Common = require('./lib/common');

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_EVENING_MEETING_ROOM;
  var postMessage = '';

  var data = {
    additional_contents: process.env.HUBOT_SLACK_MEETING_ADDITIONAL_CONTENTS
  };

  Common.loadView(
    'evening-meeting.ejs',
    data,
    function(result) {
      postMessage = result;
    },
    function(result, error) {
      robot.logger.error('Failed post on', __filename, 'result=', result, 'error=', error);
    }
  );

  new CronJob(
    '00 15 18 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the Evening Meeting!');
    },
    null,
    true,
    'Asia/Tokyo'
  ).start();

  robot.respond(/.*(test-evening-meeting).*/i, function(res) {
    res.send(postMessage);
  });
};
