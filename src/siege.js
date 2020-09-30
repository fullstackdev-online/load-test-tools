// siege-based testing here
// https://www.npmjs.com/package/siege
// works only in linux environment?
// in windows returns Error: connect ENOENT /tmp/siege.sock

const siege = require('siege')

siege()
  .for(10).times
  .get('https://google.com')
  .attack()