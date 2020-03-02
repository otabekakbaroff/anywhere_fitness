const db=require('../../data/dbconfig');


module.exports={
    find,
    findById,
    findAllClients,
    add,
    update,
    remove
}

function find() {
    return db("class");
}

  
  
function findById(id) {
    return db("class")
      .where({ id })
      .first();
}

function add(user) {
    return db("class").insert(user, "id");
}

function update(id, changes) {
    return db("class")
      .where({ id })
      .update(changes);
  }


function remove(id) {
    return db("class")
      .where({ id })
      .del();
}


function findAllClients(id) {
    return db("client")
      .join("class", "class.id", "client.class_id")
      .select("client.name", "client.contactInfo")
      .where("class_id", id);
}