<template>
  <div class="inputs-container">
    <label for="model">Model</label>
    <input type="text" name="model" id="model" tabindex="1" v-model="model" ref="first-input" class="input"/>
    <label for="colour">Colour</label>
    <input type="text" name="colour" id="colour" tabindex="2" v-model="colour" ref="second-input" class="input"/>
    <label for="wheels">Number of wheels</label>
    <input type="text" name="wheels" id="wheels" tabindex="3" v-model="wheels" ref="third-input" class="input"/>
    <button @click="nextOrder" tabindex="4" class="ship-it" ref="ship-it-button">SHIP IT</button>
    <p>Score: {{score}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      model: '',
      colour: '',
      wheels: ''
    };
  },
  computed: {
    score(): string {
      return `${this.$store.state.score}/${this.$store.state.possibleScore}`
    },
    gameOver(): boolean {
      return this.$store.state.gameOver
    }
  },
  watch: {
    gameOver(isGameOver) {
      if (isGameOver) {
        (this.$refs['first-input'] as HTMLInputElement).blur();
        (this.$refs['second-input'] as HTMLInputElement).blur();
        (this.$refs['third-input'] as HTMLInputElement).blur();
        (this.$refs['ship-it-button'] as HTMLInputElement).blur();
      }
    }
  },
  methods: {
    nextOrder() {
      this.$store.dispatch('nextOrder', {
        model: this.model,
        colour: this.colour,
        wheels: this.wheels
      });
      this.model = '';
      this.colour = '';
      this.wheels = '';
      const el: HTMLInputElement = this.$refs['first-input'] as HTMLInputElement;
      el.focus();
    }
  }
});
</script>

<style lang="scss" scoped>
.inputs-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
}

.input {
  margin-bottom: 20px;
  height: 40px;
  font-size: 24px;
}

.ship-it {
  height: 70px;
  font-size: 30px;
}
</style>
