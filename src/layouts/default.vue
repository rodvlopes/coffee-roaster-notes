<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        glossy
      >
        <q-toolbar-title>
          Coffee Roaster Notes
          <div slot="subtitle">Save your recipes to the future!</div>
        </q-toolbar-title>
        <q-btn
          icon="add"
          flat round inverted
          @click="addNewNote"
          aria-label="Add New Note"
        >
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {}
  },
  methods: {
    addNewNote () {
      console.log('New Note')
    }
  }
}
</script>

<style>
</style>
