<template>
  <div>
    <q-card class="q-ma-sm">
      <q-card-title>
        <div class="row">
          <div class="col-2 q-pt-sm">
            <span class="bg-primary shadow-1 text-white round-borders q-pa-xs">#{{ numberStr }}</span>
          </div>
          <div class="col-10">
            <q-input v-model="note.title" placeholder="Mogiana Region, Brazil" />
          </div>
        </div>
        <span slot="subtitle">
          <q-input v-model="note.type" placeholder="Medium Roast" />
        </span>
      </q-card-title>
      <q-card-main>
        <div class="row">
          <div class="col-7">
            <q-input v-model="note.recipe" float-label="Recipe" placeholder="7L.5 > 2H.9..." />
            <q-input v-model="note.weight" float-label="Weight" placeholder="100g > 80g" />
            <q-input v-model="note.crack" float-label="Crack Time" placeholder="1.0" />
          </div>
          <div class="col-5">
            <q-carousel arrows quick-nav height="180px" color="secondary" class="q-ml-sm">
              <q-carousel-slide img-src="/coffee.jpg" />
              <q-carousel-slide img-src="/coffee.jpg" />
              <q-carousel-slide img-src="/coffee.jpg" />
            </q-carousel>
          </div>
        </div>
      </q-card-main> <!-- play_arrow -->
      <q-card-separator />
      <q-card-actions class="justify-between">
        <div class="col-4">
          <q-btn round flat icon="save" title="Save"></q-btn>
          <q-btn round flat icon="cancel" title="Cancel"></q-btn>
          <q-btn round flat icon="camera_alt" title="Cancel"></q-btn>
        </div>
        <div class="col-5">
          <q-datetime v-model="note.date"
            type="date"
            :before="[{icon: 'date_range'}]"
            format="DD/MM/YYYY" />
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>

export default {
  name: 'Note',
  data () {
    return {
      note: {
        number: '',
        type: '',
        title: '',
        recipe: '',
        weight: '',
        crack: '',
        date: null
      },
      dateStr: ''
    }
  },
  props: ['number'],
  computed: {
    numberStr () {
      return (`000${this.number}`).substr(-3, 3) // add leading zeros
    }
  },
  created () {
    this.note = this.$store.getters.getNoteByNumber(this.number)
  },
  methods: {}
}
</script>
<style>

</style>
