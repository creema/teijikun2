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
var Common = require('./lib/common');

module.exports = function(robot) {
  var postRoom = process.env.HUBOT_SLACK_PULLREQUEST_CHECK_ROOM;
  var postMessage1 = '';
  var postMessage2 = '';

  var data = {
    additional_contents: process.env.HUBOT_SLACK_PULLREQUEST_ADDITIONAL_CONTENTS
  };

  Common.loadView(
    'pullrequest-check-1.ejs',
    data,
    function(result) {
      postMessage1 = result;
    },
    function(result, error) {
      robot.logger.error('Failed post on', __filename, 'result=', result, 'error=', error);
    }
  );

  Common.loadView(
    'pullrequest-check-2.ejs',
    data,
    function(result) {
      postMessage2 = result;
    },
    function(result, error) {
      robot.logger.error('Failed post on', __filename, 'result=', result, 'error=', error);
    }
  );

  new CronJob(
    '00 00 11 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage1);
      robot.logger.info('Post the morning PR Check!');
    },
    null,
    true,
    'Asia/Tokyo'
  );

  new CronJob(
    '00 00 14 * * 1-5',
    function() {
      robot.send({ room: postRoom }, postMessage2);
      robot.logger.info('Post the afternoon PR Check!');
    },
    null,
    true,
    'Asia/Tokyo'
  );

  robot.respond(/.*(test-pullrequest-check-1).*/i, function(res) {
    res.send(postMessage1);
  });

  robot.respond(/.*(test-pullrequest-check-2).*/i, function(res) {
    res.send(postMessage2);
  });
};
