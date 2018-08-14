<template>
  <q-page>
    <div class="row">
      <note v-for="note in notes" :key="note.number"
       class="col-12 col-md-4"
       v-bind="note"
       />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Note from '@/components/Note'

export default {
  name: 'Home',
  components: {
    note: Note
  },
  data: function () {
    return {
      notes: this.$store.getters.notes
    }
  }
}
</script>
