// artillery-based testing here
// https://artillery.io/docs/guides/getting-started/core-concepts.html#Load-phases-and-virtual-users

const artillery = require('artillery');
//var filePath = '/tmp/filename.yml'; //Lambda has local storage at /tmp/
var filePath = 'configs/artillery-test.yml';
var options = {
    output: 'report.json',
    environment: 'staging'
    // other command line options here, use fully qualified name
};

artillery.run(filePath, options);