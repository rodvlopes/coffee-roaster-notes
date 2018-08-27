const state = {
  numberSeq: 8,
  notes: [
    {
      number: 4,
      title: 'Grão Etiópia',
      type: 'Torra Média',
      date: new Date(),
      recipe: ['6.5L.75', '4.0L0.9', '1.0M1'],
      weight: {before: '85', after: '75'},
      crack: '0.8'
    },
    {
      number: 5,
      title: 'Grão Alto Mogiana',
      type: 'Torra Clara',
      date: new Date(),
      recipe: ['6.0M.75', '4.0L0.9'],
      weight: {before: '85', after: '75'},
      crack: '0.8'
    },
    {
      number: 6,
      title: 'Grão Alto Mogiana',
      type: 'Torra Média',
      date: new Date(),
      recipe: ['7.0M1', '4.0L0.7'],
      weight: {before: '100', after: '85'},
      crack: '2.1'
    },
    {
      number: 7,
      title: 'Uma Receita Longa',
      type: 'Torra Escura',
      date: new Date(),
      recipe: ['11.0M1', '9.0C0.7', '8.0L0.7', '4.0L0.2', '1.0C0.7'],
      weight: {before: '100', after: '85'},
      crack: '4.0'
    }
  ]
}

const getters = {
  notes (state) {
    return state.notes
  },
  getNoteByNumber (state) {
    return (number) => state.notes.filter(note => note.number === parseInt(number))[0]
  }
}

const mutations = {
  UPDATE_NOTE (state, {noteRef, noteData}) {
    Object.assign(noteRef, noteData)
  },
  ADD_NOTE (state, noteData) {
    noteData.number = state.numberSeq++
    state.notes.push(noteData)
  },
  SET_NOTES (state, {notes}) {
    state.notes = notes
  }
}

const actions = {
  saveNote ({commit, getters}, noteData) {
    let noteRef = getters.getNoteByNumber(noteData.number)
    if (noteRef) {
      commit('UPDATE_NOTE', {noteRef, noteData})
    } else {
      commit('ADD_NOTE', noteData)
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
