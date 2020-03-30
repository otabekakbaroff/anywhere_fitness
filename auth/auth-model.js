const db=require('../data/dbconfig');

module.exports = {
  findInstructorBy,
  addInstructor,
  findClientBy,
  addClient
};


function findInstructorBy(filter) {
  return db('instructor').where(filter);
}

function addInstructor(user) {
  return db('instructor')
    .insert(user)
    .then(ids => ({ ids }));
}


function findClientBy(filter) {
  return db('client').where(filter);
}

function addClient(user) {
  return db('client')
    .insert(user)
    .then(ids => ({ ids }));
}
