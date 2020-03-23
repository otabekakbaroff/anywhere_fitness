exports.up = function(knex) {
    return knex.schema.createTable('instructor', table => {

        table.increments();
        
        table.string('firstname', 255).notNullable().index();

        table.string('lastname', 255).notNullable();

        table.string('contactInfo',255);

        table.string('status', 255).notNullable();

        table
          .string('username', 255)
          .notNullable()
          .unique();
      
        table.string('password', 255).notNullable();

      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructor');
};
