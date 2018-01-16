var spawn = require('child_proces').spawn()
var job = spawn('./script.sh');
job.stdout.on('data', function(tick) {

});
job.on('exit', function() {
    console.log('exit script.sh');
});
