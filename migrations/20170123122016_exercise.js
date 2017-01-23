
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercise', function(table){
    table.increments();
    table.text('type').notNullable();
    table.integer('duration').notNullable();
    table.boolean('completed').notNullable().defaultTo(true);
    table.integer('user_id').unsigned().references('user.id').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('exercise');
};
