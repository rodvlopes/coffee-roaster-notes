<template>
  <form @submit="save">
    <q-card class="q-ma-sm">
      <q-card-title>
        <div class="row">
          <div class="col-2 q-pt-sm">
            <span class="bg-primary shadow-1 text-white round-borders q-pa-xs">#{{ numberStr }}</span>
          </div>
          <div class="col-10">
            <q-input v-model="note.title" :error="$v.note.title.$error" @blur="$v.note.title.$touch"
             placeholder="Mogiana Region, Brazil" />
          </div>
        </div>
        <span slot="subtitle">
          <q-input v-model="note.type" placeholder="Medium Roast" />
        </span>
      </q-card-title>
      <q-card-main>
        <div class="row">
          <div class="col-7">
            <!-- waiting for the new vue model.lazy modificator -->
            <q-input class="q-mb-sm" :error="$v.recipeStr.$error" @blur="$v.recipeStr.$touch"
             :value="recipeStr" @change="v => { recipeStr = v }" float-label="Recipe" placeholder="7L.5 > 2H.9..." />
            <q-input class="q-mb-sm" :error="$v.weightStr.$error" @blur="$v.weightStr.$touch"
             :value="weightStr" @change="v => { weightStr = v }"  float-label="Weight (in grams)" placeholder="100 > 80" />
            <q-input class="q-mb-sm" v-model="note.crack" float-label="Crack Time" placeholder="1.0" />
          </div>
          <div class="col-5">
            <q-uploader v-if="picUploadMode" multiple :url="picUploadUrl" />
            <q-carousel v-if="!picUploadMode" arrows quick-nav height="180px" color="secondary" class="q-ml-sm">
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
          <q-btn round flat icon="save" title="Save" @click="save" :disabled="$v.$anyError"></q-btn>
          <q-btn round flat icon="cancel" title="Cancel" @click="cancel"></q-btn>
          <q-btn round flat icon="camera_alt" title="Upload Picture" @click="picUpload"></q-btn>
        </div>
        <div class="col-5">
          <q-datetime v-model="note.date"
            type="date"
            :before="[{icon: 'date_range'}]"
            format="DD/MM/YYYY" />
        </div>
      </q-card-actions>
    </q-card>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'Note',
  data () {
    return {
      note: {
        number: '',
        type: '',
        title: '',
        recipe: [],
        weight: null,
        crack: '',
        date: null
      },
      dateStr: '',
      picUploadMode: false,
      picUploadUrl: 'localhost'
    }
  },
  props: ['number'],
  computed: {
    numberStr () {
      return (`000${this.number}`).substr(-3, 3) // add leading zeros
    },
    recipeStr: {
      get () {
        return this.note.recipe ? this.note.recipe.join(' > ') : ''
      },
      set (newValue) {
        this.note.recipe = newValue ? newValue.toUpperCase().split(/\s*>\s*/).filter(v => !!v) : []
      }
    },
    weightStr: {
      get () {
        // console.log('>>>>>>>>>', this.note.weight && this.note.weight.before, this.note.weight && this.note.weight.after)
        return this.note.weight ? `${this.note.weight.before} > ${this.note.weight.after}` : ''
      },
      set (newValue) {
        let [before, after] = newValue.split(/\s*>\s*/)
        this.note.weight = newValue ? {before, after} : null
      }
    }
  },
  created () {
    this.note = { ...this.$store.getters.getNoteByNumber(this.number) }
  },
  methods: {
    save () {
      if (!this.$v.$anyError) {
        this.$store.dispatch('saveNote', this.note)
        this.$router.push('/')
      }
    },
    cancel () {
      this.$router.push('/')
    },
    picUpload () {
      this.picUploadMode = !this.picUploadMode
    }
  },
  validations: {
    recipeStr: {
      required,
      formated () {
        return this.note.recipe && this.note.recipe.every(v => /^\d+(\.\d+)?[MLHC]{1}[\d.](\.?\d+)?$/.test(v))
      }
    },
    weightStr: {
      formated () {
        return this.note.weight ? !isNaN(this.note.weight.before) && !isNaN(this.note.weight.after) : true
      }
    },
    note: {
      title: {
        required
      }
    }
  }
}
</script>
<style>

</style>
