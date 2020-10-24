const mongoose = require('mongoose');
const winston = require('winston');

console.log('Hello World');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = function () {
  mongoose
    .connect(process.env.MONGOOSE_DATABASE_URL)
    .then(() => winston.info('Successful Connection To database'));
};
