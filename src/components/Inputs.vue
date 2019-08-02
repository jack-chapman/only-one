<template>
  <button @click="nextOrder">Next</button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    nextOrder() {
      this.$store.dispatch('nextOrder');
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
