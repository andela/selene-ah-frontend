const path = require('path');

 // Our directory path
const buildDir = path.join(__dirname, '../dist');

// App directory
const appUrl = path.join(__dirname, '../src');

module.exports = {
  buildDir,
  appUrl,
}
