import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import '@/QuasarBootstrap'
import NoteRecipe from '@/components/NoteRecipe.vue'

/* eslint-disable no-unused-expressions */

describe('NoteRecipe.vue', () => {
  let wrapper = shallowMount(NoteRecipe, {
    propsData: { recipe: '' }
  })
  let vm = wrapper.vm

  it('parse recipe: empty recipe', () => {
    expect(vm.recipeLines).to.be.eql({
      steps: null,
      weight: null,
      crack: null
    })
    expect(vm.recipeSteps).to.be.null
    expect(vm.recipeWeight).to.be.null
    expect(vm.recipeCrackTime).to.be.null
  })

  it('parse recipe: lines', () => {
    wrapper.setData({
      recipe: '6.5L.75 -> 4.0L0.9 -> 1.0M1\n85g -> 75g\ncrack @ 0.8'
    })

    expect(vm.recipeLines).to.be.eql({
      steps: '6.5L.75 -> 4.0L0.9 -> 1.0M1',
      weight: '85g -> 75g',
      crack: 'crack @ 0.8'
    })
    expect(vm.recipeSteps).to.be.eql([ '6.5L.75', '4.0L0.9', '1.0M1' ])
    expect(vm.recipeWeight).to.be.eql({ before: '85', after: '75' })
    expect(vm.recipeCrackTime).to.be.equal('0.8')
  })
})
