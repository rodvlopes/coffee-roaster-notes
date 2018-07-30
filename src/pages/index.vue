<template>
  <q-page>
    <div class="row">
      <note class="col-12 col-md-4" />
      <note class="col-12 col-md-4" />
      <note class="col-12 col-md-4" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Note from 'components/Note'

export default {
  name: 'PageIndex',
  components: {
    'note': Note
  }
}
</script>
