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
    return {}
  },
  props: ['content'],
  computed: {
    contentLines () {
      console.log('>>', this.content)
      return this.content.split('\n')
    },
    recipeSteps () {
      return this.contentLines[0].split(/\s*->\s*/)
    },
    recipeWeight () {
      let [before, after] = this.contentLines[1].replace(/g/g, '').split(/->/)
      return {before, after}
    },
    recipeCrackTime () {
      return this.contentLines[2].split(/@\s*/)[1]
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
