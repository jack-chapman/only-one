<template>
  <div class="inputs-container">
    <label for="model">Model</label>
    <input type="text" name="model" id="model" tabindex="1" v-model="model" ref="first-input"/>
    <label for="colour">Colour</label>
    <input type="text" name="colour" id="colour" tabindex="2" v-model="colour" />
    <label for="wheels">Number of wheels</label>
    <input type="text" name="wheels" id="wheels" tabindex="3" v-model="wheels" />
    <button @click="nextOrder" tabindex="4">SHIP IT</button>
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
      const el: HTMLInputElement = <HTMLInputElement>this.$refs['first-input'];
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
</style>
