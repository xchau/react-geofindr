'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react_geofindr'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
