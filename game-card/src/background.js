'use strict';

var CronJob = require('cron').CronJob;
var timeZone = 'Asia/Jakarta';

var job = new CronJob('*/5 * * * * *', function() {
      console.log(`I'm in!!!!`);
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);

