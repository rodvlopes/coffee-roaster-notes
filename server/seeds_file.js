const {knex, Note} = require('../src/models.js')

const seed = () => {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(() => {
      // Inserts seed entries
      let note0 = {title: 'Titulo', type: 'Tipo Descritivo', date: new Date(), recipe: '1L.9 < 2L.1', weight: {before:'1'}}
      Note.save(note0).then((a) => {
      	console.log('note0 insert', a)
      })
    });
};

seed();
