require('dotenv').config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.error('[error] No PORT environment variable in .env file');
  process.exit(1);
}

const DB_HOST = process.env.DB_HOST;
if (DB_HOST === undefined) {
  console.error('[error] No DB_HOST environment variable in .env file');
  process.exit(1);
}

const DB_PORT = process.env.DB_PORT;
if (DB_PORT === undefined) {
  console.error('[error] No DB_PORT environment variable in .env file');
  process.exit(1);
}

const DB_NAME = process.env.DB_NAME;
if (DB_NAME === undefined) {
  console.error('[error] No DB_NAME environment variable in .env file');
  process.exit(1);
}

const JWT_SECRET = process.env.JWT_SECRET;
if (JWT_SECRET === undefined) {
  console.error('[error] No JWT_SECRET environment variable in .env file');
  process.exit(1);
}

module.exports = {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  JWT_SECRET,
};
