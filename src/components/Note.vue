<template>
  <div>
    <q-card class="q-ma-sm">
      <q-card-title>
        <span class="bg-primary shadow-1 text-white round-borders q-pa-xs">#{{ numberStr }}</span>
        {{ title }}
        <span slot="subtitle">{{ type }}</span>
        <div slot="right"> <!-- class="column" -->
          <q-btn round flat icon="edit" @click="clickEdit"></q-btn>
          <q-btn round flat icon="delete"></q-btn>
        </div>
      </q-card-title>
      <q-card-main>
        <div class="row">
          <div class="col-7">
            <note-recipe :recipe="recipe" />
          </div>
          <div class="col-5">
            <q-carousel arrows quick-nav height="120px" color="secondary">
              <q-carousel-slide img-src="/coffee.jpg" />
              <q-carousel-slide img-src="/coffee.jpg" />
              <q-carousel-slide img-src="/coffee.jpg" />
            </q-carousel>
          </div>
        </div>
      </q-card-main> <!-- play_arrow -->
      <q-card-separator />
      <q-card-actions align="end">
        <q-icon name="date_range" class="q-mr-sm" /> {{ dateStr }}
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import NoteRecipe from '@/components/NoteRecipe'

export default {
  name: 'Note',
  data () {
    return {}
  },
  props: ['number', 'title', 'type', 'date', 'recipe'],
  computed: {
    dateStr () {
      return this.date.toLocaleDateString()
    },
    numberStr () {
      return (`000${this.number}`).substr(-3, 3) // add leading zeros
    }
  },
  components: {
    'note-recipe': NoteRecipe
  },
  methods: {
    clickEdit () {
      console.log(this.number)
      this.$router.push({name: 'editNote', params: { number: this.number }})
    }
  }
}
</script>
<style>

</style>
