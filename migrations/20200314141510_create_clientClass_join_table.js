exports.up = function(knex) {
    return knex.schema.createTable('join', table => {

        table.increments();

        table
        .integer("class_id") 
        .unsigned() 
        .notNullable()
        .references("id")
        .inTable("class")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");

        table
        .integer("client_id") 
        .unsigned() 
        .notNullable()
        .references("id")
        .inTable("client")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");
       
      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('join');
};
