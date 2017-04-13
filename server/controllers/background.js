'use strict';

var CronJob = require('cron').CronJob;
var timeZone = 'Asia/Jakarta';

var job = new CronJob('*/5 * * * * *', function() {
      return `Timed Out!`;
  }, function () {
    /* This function is executed when the job stops */
  },
  false, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

module.exports = {
	job
}

