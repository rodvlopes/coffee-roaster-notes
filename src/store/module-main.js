const state = {
  notes: [
    {
      number: 4,
      title: 'Grão Etiópia',
      type: 'Torra Média',
      date: new Date(),
      recipe: '6.5L.75 > 4.0L0.9 > 1.0M1\n85g > 75g\ncrack @ 0.8'
    },
    {
      number: 5,
      title: 'Grão Alto Mogiana',
      type: 'Torra Clara',
      date: new Date(),
      recipe: '6.0M.75 > 4.0L0.9\n85g > 75g\ncrack @ 1.0'
    },
    {
      number: 6,
      title: 'Grão Alto Mogiana',
      type: 'Torra Média',
      date: new Date(),
      recipe: '7.0M1 > 4.0L0.7\n100g > 85g\ncrack @ 2.1'
    },
    {
      number: 7,
      title: 'Uma Receita Longa',
      type: 'Torra Escura',
      date: new Date(),
      recipe: '11.0M1 > 9.0C0.7 > 8.0L0.7> 4.0L0.2> 1.0C0.7\n100g > 85g\ncrack @ 4.0'
    }
  ]
}

const getters = {
  notes (state) {
    return state.notes
  },
  getNoteByNumber (state) {
    return (number) => state.notes.filter(note => note.number === number)[0]
  }
}

const actions = {
  someAction (context) {}
}

const mutations = {
  someMutation (state) {}
}

export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
