exports.up = function(knex) {
    return knex.schema.createTable('class', table => {

        table.increments();

        table.string('class_name', 256).notNullable().index(),

        table.string('description',256);

        table.string('duration', 256);

        table.string('intensity',256);

        table.string('location', 256).notNullable();

        table.string('dateAndTime',256).notNullable().unique();

        table.boolean('active').defaultTo(true);

        table
        .integer("instructor_id") 
        .unsigned() 
        .notNullable()
        .references("id")
        .inTable("instructor")
        .onUpdate("CASCADE") 
        .onDelete("CASCADE");

      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('class');
};
