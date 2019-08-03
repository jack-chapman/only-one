<template>
  <div class="menu-container">
    <h2>Menu</h2>
    <h3 v-if="gameOver">You got {{score}} orders correct!</h3>
    <p class="instructions" v-if="!gameOver">
      You've only got 60 seconds to ship as many orders as possible!<br><br>
      Enter the order details on the right, then click SHIP IT.<br><br>
      Make sure you get the details exactly right, or you'll cause shipping issues and the customer will be unhappy.<br><br>
      REMEMBER all of our Unicycles have <em>Only One</em> wheel!
    </p>
    <button @click="startGame" v-if="!gameOver">Start!</button>
    <button @click="resetGame" v-if="gameOver">Play Again!</button>
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
  mounted() {

  },
  methods: {
    startGame(): void {
      this.$store.dispatch('startGame');
    },
    resetGame(): void {
      this.$store.dispatch('resetGame')
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
  width: 300px;
}
</style>
