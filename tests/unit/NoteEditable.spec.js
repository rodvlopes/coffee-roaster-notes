import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import '@/QuasarBootstrap'
import store from '@/store/index'
import NoteEditable from '@/components/NoteEditable.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

/* eslint-disable no-unused-expressions */

describe('NoteEditable.vue', () => {
  let notes = [
    {
      number: 4,
      recipe: null,
      weight: null
    },
    {
      number: 5,
      recipe: ['3L.9', '1H1'],
      weight: {before: '100', after: '80'}
    },
    {
      number: 6,
      recipe: null,
      weight: null
    },
  ]
  store.commit('SET_NOTES', {notes})

  let buildNoteEditable = (number) => {
    return shallowMount(NoteEditable, {
      propsData: { number },
      store,
      localVue
    })
  }

  it('getters: null', () => {
    let vm = buildNoteEditable(4).vm
    expect(vm.recipeStr).to.be.equal('')
    expect(vm.weightStr).to.be.equal('')
  })

  it('getters: happy', () => { // to run only one: it.only(...)
    let vm = buildNoteEditable(5).vm
    expect(vm.recipeStr).to.be.equal('3L.9 > 1H1')
    expect(vm.weightStr).to.be.equal('100 > 80')
  })

  it('setters: null', () => { // to run only one: it.only(...)
    let vm = buildNoteEditable(6).vm
    vm.recipeStr = ''
    expect(vm.note.recipe).to.be.eql([])

    vm.weightStr = ''
    expect(vm.note.weight).to.be.null
  })

  it('setters: happy', () => { // to run only one: it.only(...)
    let vm = buildNoteEditable(6).vm
    vm.recipeStr = '1L.1 > 2H2>3H3'
    expect(vm.note.recipe).to.be.eql(['1L.1', '2H2', '3H3'])

    vm.weightStr = '10>9'
    expect(vm.note.weight).to.be.eql({before: '10', after: '9'})
  })

  it('setters: toUpperCase', () => { // to run only one: it.only(...)
    let vm = buildNoteEditable(6).vm
    vm.recipeStr = '1l.1 > 2h2>3M3'
    expect(vm.note.recipe).to.be.eql(['1L.1', '2H2', '3M3'])
  })

  it('setters: unexpected input', () => {
    let vm = buildNoteEditable(6).vm
    vm.recipeStr = '2H2>'
    expect(vm.note.recipe).to.be.eql(['2H2'])

    vm.recipeStr = '2H2 >> 3'
    expect(vm.note.recipe).to.be.eql(['2H2', '3'])

    vm.weightStr = '10 > '
    expect(vm.note.weight).to.be.eql({before: '10', after: ''})

    vm.weightStr = '10 > 9 > 1'
    expect(vm.note.weight).to.be.eql({before: '10', after: '9'})
  })

  it('recipe validator', () => {
    let vm = buildNoteEditable(6).vm

    /* required */
    vm.recipeStr = ''
    vm.$v.recipeStr.$touch()
    expect(vm.$v.recipeStr.$error).to.be.true

    /* missing > */
    vm.recipeStr = '1L1 2L.1'
    vm.$v.recipeStr.$touch()
    expect(vm.$v.recipeStr.$error).to.be.true

    /* missing value after L */
    vm.recipeStr = '1L'
    vm.$v.recipeStr.$touch()
    expect(vm.$v.recipeStr.$error).to.be.true

    /* two letters not allowed */
    vm.recipeStr = '1LH'
    vm.$v.recipeStr.$touch()
    expect(vm.$v.recipeStr.$error).to.be.true

    /* happy */
    vm.recipeStr = '1L.1> 2.1H1 > 1.1C1.1'
    vm.$v.recipeStr.$touch()
    expect(vm.$v.recipeStr.$error).to.be.false
  })

  it.only('weight validator', () => {
    let vm = buildNoteEditable(6).vm

    /* not required */
    vm.weightStr = ''
    vm.$v.weightStr.$touch()
    expect(vm.$v.weightStr.$error).to.be.false

    /* only one value */
    vm.weightStr = '4 >'
    vm.$v.weightStr.$touch()
    expect(vm.$v.weightStr.$error).to.be.false

    /* must be number */
    vm.weightStr = '4 > a'
    vm.$v.weightStr.$touch()
    expect(vm.$v.weightStr.$error).to.be.true
  })
})
