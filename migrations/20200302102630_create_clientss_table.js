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

        table
        .integer("class_id") 
        .unsigned() 
        .references("id")
        .inTable("class")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");
      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('client');
};
