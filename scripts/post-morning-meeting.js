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
var Common = require('./lib/common');

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_MORNING_MEETING_ROOM;
  var postMessage = '';

  var data = {
    additional_content_first: process.env.HUBOT_SLACK_MEETING_ADDITINAL_CONTENTS
  };

  Common.loadView(
    'morning-meeting.ejs',
    data,
    function(result) {
      postMessage = result;
    },
    function(result, error) {
      robot.logger.error('Failed post on', __filename, 'result=', result, 'error=', error);
    }
  );

  new CronJob(
    '00 25 09 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage);
      robot.logger.info('Post the Morning Meeting!');
    },
    null,
    true,
    'Asia/Tokyo'
  );

  robot.respond(/.*(test-morning-meeting).*/i, function(res) {
    res.send(postMessage);
  });
};
