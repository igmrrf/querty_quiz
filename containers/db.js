const mongoose = require('mongoose');

console.log('Hello World');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

module.exports = function () {
  mongoose
    .connect(process.env.MONGOOSE_DATABASE_URL)
    .then(() => console.log('Successful Connection To database'));
};
