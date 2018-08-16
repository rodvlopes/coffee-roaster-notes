const state = {
  numberSeq : 8,
  notes: [
    {
      number: 4,
      title: 'Grão Etiópia',
      type: 'Torra Média',
      date: new Date(),
      recipe: ['6.5L.75', '4.0L0.9', '1.0M1'],
      weight: {before: '85g', after: '75g'},
      crack: '0.8'
    },
    {
      number: 5,
      title: 'Grão Alto Mogiana',
      type: 'Torra Clara',
      date: new Date(),
      recipe: ['6.0M.75', '4.0L0.9'],
      weight: {before: '85g', after: '75g'},
      crack: '0.8'
    },
    {
      number: 6,
      title: 'Grão Alto Mogiana',
      type: 'Torra Média',
      date: new Date(),
      recipe: ['7.0M1', '4.0L0.7'],
      weight: {before: '100g', after: '85g'},
      crack: '2.1'
    },
    {
      number: 7,
      title: 'Uma Receita Longa',
      type: 'Torra Escura',
      date: new Date(),
      recipe: ['11.0M1', '9.0C0.7', '8.0L0.7> 4.0L0.2> 1.0C0.7'],
      weight: {before: '100g', after: '85g'},
      crack: '4.0'
    }
  ]
}

const getters = {
  notes (state) {
    return state.notes
  },
  getNoteByNumber (state) {
    return (number) => state.notes.filter(note => note.number == number)[0]
  }
}

const mutations = {
  updateNote (state, noteRef, noteUpdated) {

  },
  addNote (state, note) {

  },
}

const actions = {
  saveNote ({commit, getters}, note) {
    let noteState = getters.getNoteByNumber(note.number)
    if (noteState) {
      
    }
    else {
      note.number = state.numberSeq++
      state.notes.push(note)
    }
  }
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
