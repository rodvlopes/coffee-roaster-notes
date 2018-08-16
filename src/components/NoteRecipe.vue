<template>
  <span class="note-recipe">
    <div v-if="recipe" class="row step">
      <span v-for="(step, index) in recipe" :key="index">
        {{ step }}
        <q-icon name="keyboard_arrow_right" v-if="recipe.length-1 != index" size="2em" />
      </span>
    </div>
    <div v-if="crack" class="row q-mb-sm">
      <q-chip icon="flash_on" icon-right="alarm" small color="primary">
        @ {{ crack }}
      </q-chip>
    </div>
    <div v-if="weight" class="row">
      <q-chip icon="shopping_basket" small  color="primary" class="weight">
        {{ weight.before }}
      </q-chip>
      <q-icon name="keyboard_arrow_right" size="2em" />
      <q-chip icon="shopping_basket" small color="primary" class="weight">
        {{ weight.after }}
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
  props: ['recipe', 'weight', 'crack'],
  computed: {}
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
