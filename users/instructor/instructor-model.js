const db=require('../../data/dbconfig');


module.exports = {
    find,
    findById,
    InstructorCreatedClasses,
    update,
    remove,
};

function find() {
    return db('instructor');
}

function findById(id) {
    return db('instructor')
      .where({ id: Number(id) })
      .first();
}

function InstructorCreatedClasses(id){
    return db("class")
        .where("class.instructor_id", id)
}

  
function update(id, user) {
    return db('instructor')
      .where('id', Number(id))
      .update(user);
}
  
  
function remove(id) {
    return db('instructor')
      .where('id', Number(id))
      .del();
}