<template>
  <div class="inputs-container">
    <label for="model">Model</label>
    <input
      type="text"
      name="model"
      id="model"
      tabindex="1"
      v-model="model"
      ref="first-input"
      class="input"
    />
    <label for="colour">Colour</label>
    <input
      type="text"
      name="colour"
      id="colour"
      tabindex="2"
      v-model="colour"
      ref="second-input"
      class="input"
    />
    <label for="wheels">Number of wheels</label>
    <input
      type="text"
      name="wheels"
      id="wheels"
      tabindex="3"
      v-model="wheels"
      ref="third-input"
      class="input"
    />
    <button @click="nextOrder" tabindex="4" class="ship-it" ref="ship-it-button">SHIP IT</button>
    <p>Score: {{score}}</p>
    <transition name="fade">
      <h1 class="emoji-sign good" v-if="thumbsUpSign">👍</h1>
    </transition>
    <transition name="fade">
      <h1 class="emoji-sign bad" v-if="thumbsDownSign">👎</h1>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      model: '',
      colour: '',
      wheels: '',
      thumbsUpSign: false,
      thumbsDownSign: false
    };
  },
  computed: {
    score(): string {
      return `${this.$store.state.score}/${this.$store.state.possibleScore}`;
    },
    gameOver(): boolean {
      return this.$store.state.gameOver;
    }
  },
  watch: {
    gameOver(isGameOver) {
      if (isGameOver) {
        (this.$refs['first-input'] as HTMLInputElement).blur();
        (this.$refs['second-input'] as HTMLInputElement).blur();
        (this.$refs['third-input'] as HTMLInputElement).blur();
        (this.$refs['ship-it-button'] as HTMLInputElement).blur();
        this.model = '';
        this.colour = '';
        this.wheels = '';
      }
    }
  },
  methods: {
    nextOrder() {
      this.$store.dispatch('nextOrder', {
        model: this.model,
        colour: this.colour,
        wheels: this.wheels
      }).then(success => {
        if (success) {
          this.thumbsUp();
        } else {
          this.thumbsDown();
        }
      });
      this.model = '';
      this.colour = '';
      this.wheels = '';
      const el: HTMLInputElement = this.$refs[
        'first-input'
      ] as HTMLInputElement;
      el.focus();
    },
    thumbsUp() {
      this.thumbsUpSign = true;
      setTimeout(() => {
        this.thumbsUpSign = false;
      }, 500);
    },
    thumbsDown() {
      this.thumbsDownSign = true;
      setTimeout(() => {
        this.thumbsDownSign = false;
      }, 500);
    }
  }
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


<style lang="scss" scoped>
.inputs-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin-right: 10px;
}

.input {
  margin-bottom: 20px;
  height: 40px;
  font-size: 24px;
  font-family: 'Cedarville Cursive', cursive;
  border: none;
  border-bottom: 1px dashed black;
  background-color: rgba(255, 255, 255, 0.6);
}

.ship-it {
  height: 70px;
  font-size: 30px;
  background: none;
  border: 1px dashed black;
  &:hover {
    background: lightgray;
    cursor: pointer;
  }
  &:focus {
    border: 1px dashed black;
    background: lightgray;
  }
}

.emoji-sign {
  font-size: 40px;
  &.good {
    filter: hue-rotate(45deg);
  }
  &.bad {
    filter: hue-rotate(-45deg);
  }
}
</style>
