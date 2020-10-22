require('dotenv').config();
const express = require('express');
const winston = require('winston');

const app = express();
console.log(process.env.MONGOOSE_DATABASE_URL);

require('./middlewares/logger')();
require('./containers/db')();
require('./containers/routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
  if (error) throw new Error('Failed to start Server');

  winston.info(`Server running on port ${PORT}`);
});
