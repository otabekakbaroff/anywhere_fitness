const db=require('../../data/dbconfig');


module.exports = {
    find,
    findById,
    update,
    remove,
};

function find() {
    return db('client');
}

function findById(id) {
    return db('client')
      .where({ id: Number(id) })
      .first();
}
   
  
function update(id, user) {
    return db('client')
      .where('id', Number(id))
      .update(user);
}
  
  
function remove(id) {
    return db('client')
      .where('id', Number(id))
      .del();
}