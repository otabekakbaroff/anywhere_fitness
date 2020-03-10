const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  findInstructorBy,
  addInstructor,
  findClientBy,
  addClient
};


function findInstructorBy(filter) {
  console.log(db);
  return db('instructor').where(filter);
}

function addInstructor(user) {
  return db('instructor')
    .insert(user)
    // .then(ids => ({ id: ids[0] }));
    .then(ids => ({ ids }));
}


function findClientBy(filter) {
  return db('client').where(filter);
}

function addClient(user) {
  return db('client')
    .insert(user)
    // .then(ids => ({ id: ids[0] }));
    .then(ids => ({ ids }));
}


