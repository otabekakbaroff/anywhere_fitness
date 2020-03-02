
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('client').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1, name:'Joseph', contactInfo:'client1@gmail.com', username: 'client1', password:123},
        {id: 2, name:'Zelda', contactInfo:'client2@gmail.com', username: 'client2', password:123},
        {id: 3, name:'Camile', contactInfo:'client3@gmail.com', username: 'client3', password:123}
      ]);
    });
};
