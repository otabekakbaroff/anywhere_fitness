
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructor').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor').insert([
        {id: 1, name:'Zack', contactInfo:'Zack@gmail.com',status:'Sambo Instructor', username: 'zap', password:123},
        {id: 2, name:'David', contactInfo:'David@gmail.com',status:'Yoga Instructor', username: 'xap', password:123},
        {id: 3, name:'Jordan', contactInfo:'Jordan@gmail.com',status:'Fitness Instructor', username: 'cap', password:123}
      ]);
    });
};
