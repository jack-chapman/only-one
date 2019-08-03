<template>
  <div class="menu-container">
    <h2>Menu</h2>
    <h3 v-if="gameOver">{{score}}</h3>
    <div class="buttons">
      <button @click="startGame">Start!</button>
      <button @click="instructionsVisible = !instructionsVisible">Instructions</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      instructionsVisible: false
    }
  },
  methods: {
    startGame(): void {

    }
  },
  computed: {
    score(): string {
      return `${this.$store.state.score}/${this.$store.state.possibleScore}`
    },
    gameOver(): boolean {
      return this.$store.state.gameOver
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-container {
  border: 1px black solid;
  background: #fff;
  padding: 40px;
}
</style>
