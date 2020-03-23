exports.up = function(knex) {
    return knex.schema.createTable('client', table => {

        table.increments();

        table.string('firstname', 256).notNullable().index();

        table.string('lastname',256).notNullable();

        table.string('contactInfo',255);

        table
          .string('username', 255)
          .notNullable()
          .unique();
        
        table.string('password', 255).notNullable();

      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('client');
};
