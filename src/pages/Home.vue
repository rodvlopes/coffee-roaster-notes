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
      notes: [
        {
          number: 4,
          title: 'Grão Etiópia',
          type: 'Torra Média',
          date: new Date(),
          recipe: '6.5L.75 -> 4.0L0.9 -> 1.0M1\n85g -> 75g\ncrack @ 0.8'
        },
        {
          number: 5,
          title: 'Grão Alto Mogiana',
          type: 'Torra Clara',
          date: new Date(),
          recipe: '6.0M.75 -> 4.0L0.9\n85g -> 75g\ncrack @ 1.0'
        }
      ]
    }
  }
}
</script>
