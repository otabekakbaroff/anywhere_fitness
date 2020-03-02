exports.up = function(knex) {
    return knex.schema.createTable('client', table => {

        table.increments();

        table.string('name', 256),

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
