const knex = require('knex');
const knexConfig = require("../knexfile.js");
const environment =  process.env.NODE_ENV;
module.exports = knex(knexConfig[environment]);
