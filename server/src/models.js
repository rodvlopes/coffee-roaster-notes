const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig.development);

class Note {
  static async list() {
    return await knex('notes').select()
  }

  /* create or save */
  static async save(obj) {
    const {number, ...contentObj} = obj
    const content = JSON.stringify(contentObj)
    if (Number.isInteger(number)) {
      return await knex('notes')
                   .where('number', '=', number)
                   .update({content})
    }
    else {
      console.log('else')
      return await knex('notes').insert({content})
    }
  }
}

module.exports = {
  knex,
  Note
} 