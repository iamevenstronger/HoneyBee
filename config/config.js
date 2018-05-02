module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "honeycomb",
    "host": "localhost",
    "dialect":"mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "honeycomb",
    "host": "localhost",
    "dialect":"mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect":"mysql"
  }
};
