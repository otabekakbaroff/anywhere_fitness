const knex = require('knex');
const knexConfig = require("../knexfile.js");
const environment = "development";
//process.env.NODE_ENV || 
module.exports = knex(knexConfig[environment]);
