<template>
  <span class="note-recipe">
    <div class="row step">
      <span v-for="(step, index) in recipeSteps" :key="index">
        {{ step }}
        <q-icon name="keyboard_arrow_right" v-if="recipeSteps.length-1 != index" size="2em" />
      </span>
    </div>
    <div class="row q-mb-sm">
      <q-chip icon="flash_on" icon-right="alarm" small color="primary">
        @ {{ recipeCrackTime }}
      </q-chip>
    </div>
    <div class="row">
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
    return {
      recipe: '6.5L.75 -> 4.0L0.9 -> 1.0M1\n85g -> 75g\ncrack @ 0.8'
    }
  },
  computed: {
    recipeLines () {
      return this.recipe.split('\n')
    },
    recipeSteps () {
      return this.recipeLines[0].split(/\s*->\s*/)
    },
    recipeWeight () {
      const [before, after] = this.recipeLines[1].replace(/g/g, '').split(/->/)
      return { before, after }
    },
    recipeCrackTime () {
      return this.recipeLines[2].split(/@\s*/)[1]
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
