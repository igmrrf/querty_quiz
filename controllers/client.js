const path = require('path');

module.exports = function (req, res) {
  console.log('Called');
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
};
