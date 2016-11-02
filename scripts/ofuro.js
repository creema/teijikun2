// Description:
//   お風呂チェック
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot お風呂 - returns Parupunte

module.exports = function(robot) {
  robot.respond(/(お(風呂|ふろ|フロ)|オフロ|o[fh]uro|Bathroom)/i, function(message) {
    var replyMessage = '';
    replyMessage += '@himejima\n';
    replyMessage += 'お風呂入りましたか？';
    message.send(replyMessage);
    robot.logger.info('Post the ofuro reply.');
  });
};
