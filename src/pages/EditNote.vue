<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-12 col-md-8 col-lg-6">
        <note-editable :number="number" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import NoteEditable from '@/components/NoteEditable'

export default {
  name: 'EditNote',
  components: {
    'note-editable': NoteEditable
  },
  props: ['number'],
  data: function () {
    return {}
  }
}
</script>
