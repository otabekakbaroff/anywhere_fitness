
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class').del()
    .then(function () {
      // Inserts seed entries
      return knex('class').insert([
        {id: 1, class_name:'NewGoals2020', description:'Learn art of Sambo', duration: '2 hours', intensity:'Beginners', location:'Somewhere in US',dateAndTime:'11/11/11 2:00PM PST', instructor_id:1},
        {id: 2, class_name:'JanuaryPackedGym', description:'Learn art of Sambo', duration: '2 hours', intensity:'Beginners', location:'Somewhere in US',dateAndTime:'11/12/11 3:00PM PST', instructor_id:1},
        {id: 3, class_name:'RanOutOfIdeas', description:'Learn art of Sambo', duration: '2 hours', intensity:'Beginners', location:'Somewhere in US',dateAndTime:'11/13/11 2:00PM PST', instructor_id:1}
      ]);
    });
};
