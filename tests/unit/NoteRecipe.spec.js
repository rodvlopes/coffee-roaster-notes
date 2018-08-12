import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import '@/QuasarBootstrap'
import NoteRecipe from '@/components/NoteRecipe.vue'

/* eslint-disable no-unused-expressions */

describe('NoteRecipe.vue', () => {
  it('parse recipe: empty recipe', () => {
    let recipe = ''
    let vm = shallowMount(NoteRecipe, {
      propsData: { recipe }
    }).vm

    expect(vm.recipeLines).to.be.eql({
      steps: null,
      weight: null,
      crack: null
    })
    expect(vm.recipeSteps).to.be.null
    expect(vm.recipeWeight).to.be.null
    expect(vm.recipeCrackTime).to.be.null
  })

  it('parse recipe: lines', () => { // to run only one: it.only(...)
    let recipe = '6.5L.75 > 4.0L0.9 > 1.0M1\n85g > 75g\ncrack @ 0.8'
    let vm = shallowMount(NoteRecipe, {
      propsData: { recipe }
    }).vm

    expect(vm.recipeLines).to.be.eql({
      steps: '6.5L.75 > 4.0L0.9 > 1.0M1',
      weight: '85g > 75g',
      crack: 'crack @ 0.8'
    })
    expect(vm.recipeSteps).to.be.eql([ '6.5L.75', '4.0L0.9', '1.0M1' ])
    expect(vm.recipeWeight).to.be.eql({ before: '85', after: '75' })
    expect(vm.recipeCrackTime).to.be.equal('0.8')
  })

  it('parse recipe: spaces are optional', () => { // to run only one: it.only(...)
    let recipe = '6.5L.75>4.0L0.9 > 1.0M1\n85g> 75g\ncrack@0.8'
    let vm = shallowMount(NoteRecipe, {
      propsData: { recipe }
    }).vm

    expect(vm.recipeSteps).to.be.eql([ '6.5L.75', '4.0L0.9', '1.0M1' ])
    expect(vm.recipeWeight).to.be.eql({ before: '85', after: '75' })
    expect(vm.recipeCrackTime).to.be.equal('0.8')
  })
})
