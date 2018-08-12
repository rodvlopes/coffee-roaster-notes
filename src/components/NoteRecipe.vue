<template>
  <span class="note-recipe">
    <div v-if="recipeSteps" class="row step">
      <span v-for="(step, index) in recipeSteps" :key="index">
        {{ step }}
        <q-icon name="keyboard_arrow_right" v-if="recipeSteps.length-1 != index" size="2em" />
      </span>
    </div>
    <div v-if="recipeCrackTime" class="row q-mb-sm">
      <q-chip icon="flash_on" icon-right="alarm" small color="primary">
        @ {{ recipeCrackTime }}
      </q-chip>
    </div>
    <div v-if="recipeWeight" class="row">
      <q-chip icon="shopping_basket" small  color="primary" class="weight">
        {{ recipeWeight.before }}
      </q-chip>
      <q-icon name="keyboard_arrow_right" size="2em" />
      <q-chip icon="shopping_basket" small color="primary" class="weight">
        {{ recipeWeight.after }}
      </q-chip>
    </div>
  </span>
</template>

<script>
export default {
  name: 'NoteRecipe',
  data () {
    return {}
  },
  props: [
    'recipe'
  ],
  computed: {
    recipeLines () {
      let [steps, weight, crack] = [null, null, null]
      if (this.recipe) {
        [steps, weight, crack] = this.recipe.split('\n')
      }
      return {steps, weight, crack}
    },
    recipeSteps () {
      if (this.recipeLines.steps) {
        return this.recipeLines.steps.split(/\s*>\s*/)
      } else return null
    },
    recipeWeight () {
      if (this.recipeLines.weight) {
        const [before, after] = this.recipeLines.weight.replace(/[g\s]+/g, '').split(/>/)
        return { before, after }
      } else return null
    },
    recipeCrackTime () {
      if (this.recipeLines.crack) {
        return this.recipeLines.crack.split(/@\s*/)[1]
      } else return null
    }
  }
}
</script>

<style lang="stylus">
.note-recipe
  .weight
    font-weight bolder
    &::after
      content 'g'
      font-weight normal
  .step
    line-height 2em
</style>
