const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('unhandle exception process shutting down');
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandleRejection', (err) => {
  console.log('unhandle rejection process shutting down');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
