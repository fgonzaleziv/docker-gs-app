if (process.env.MYSQL_HOST) module.exports = require('./mysql');
if (process.env.POSTGRES_HOST) module.exports = require('./postgresql');
else module.exports = require('./sqlite');
