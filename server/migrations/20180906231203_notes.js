exports.up = knex => {
  return knex.schema.createTable('notes', table => {
    table.increments('number')
    table.json('content')
  })  
};

exports.down = knex => {
  return knex.schema.dropTable('notes')
};
