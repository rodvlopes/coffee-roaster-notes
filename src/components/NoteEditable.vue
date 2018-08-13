<template>
  <div>
    <q-card class="q-ma-sm">
      <q-card-title>
        <div class="row">
          <div class="col-2 q-pt-sm">
            <span class="bg-primary shadow-1 text-white round-borders q-pa-xs">#{{ numberStr }}</span>
          </div>  
          <div class="col-10">
            <q-input v-model="title" placeholder="Mogiana Region, Brazil" />
          </div>
        </div>
        <span slot="subtitle">
          <q-input v-model="type" placeholder="Medium Roast" />
        </span>
      </q-card-title>
      <q-card-main>
        <div class="row">
          <div class="col-7">
            <q-input v-model="recipe" float-label="Recipe" placeholder="7L.5 > 2H.9..." />
            <q-input v-model="weight" float-label="Weight" placeholder="100g > 80g" />
            <q-input v-model="crack" float-label="Crack Time" placeholder="1.0" />
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
          <q-datetime v-model="date" 
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
      type: '',
      title: '',
      recipe: '',
      weight: '',
      crack: '',
      dateStr: '',
      date: null
    }
  },
  props: ['number'],
  computed: {
    numberStr () {
      return (`000${this.number}`).substr(-3, 3) // add leading zeros
    }
  },
  methods: {}
}
</script>
<style>

</style>
