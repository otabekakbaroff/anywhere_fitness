const db=require('../../data/dbconfig');


module.exports={
    find,
    add,
    classesForClients,
    clientsInClasses,
    update,
    remove
}

function find() {
    return db("join");
}


function add(user) {
    return db("join").insert(user, "id");
}

function update(id, changes) {
    return db("join")
      .where({ id })
      .update(changes);
  }


function remove(id) {
    return db("join")
      .where({ id })
      .del();
}

function classesForClients(id){
    return db("join")
        .join("client", "client.id", "join.client_id")
        .join("class","class.id", "join.class_id")
        .select("class.class_name","class.class_name","class.description","class.duration","class.intensity","class.location","class.dateAndTime","class.active")
        .where("client.id", id)
        .then(classes=>({classes}))
}

function clientsInClasses(id){
    return db("join")
           .join("client", "client.id", "join.client_id")
           .join("class","class.id", "join.class_id")
           .select("client.name","client.contactInfo")
           .where("class.id", id)
           .then(clients=>({clients}))
}



