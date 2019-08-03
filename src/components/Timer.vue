<template>
  <h2 class="timer" :class="{'warning': dangerZone}">{{label}}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return  {
      remainingTime: 60,
      identifier: 0
    }
  },
  computed: {
    gameInProgress(): boolean {
      return this.$store.state.isPlaying;
    },
    label(): string {
      if (this.$store.state.gameOver) {
        return `Time's up!`
      } else {
        return `${this.remainingTime}s remaining!`
      }
    },
    dangerZone(): boolean {
      return this.remainingTime <= 10;
    }
  },
  watch: {
    gameInProgress(playing: boolean): void {
      if (playing) {
        this.remainingTime = 60;
        this.startCounter();
      } else {
        this.stopCounter();
      }
    },
    remainingTime(secondsRemaining: number): void {
      if (secondsRemaining === 0) {
        this.stopCounter();
        this.$store.dispatch('endGame');
      }
    }
  },
  methods: {
    countDown(): void {
      this.remainingTime = this.remainingTime - 1;
    },
    startCounter(): void {
      this.identifier = setInterval(this.countDown, 1000);
    },
    stopCounter(): void {
      clearInterval(this.identifier);
    }
  }
})
</script>

<style lang="scss" scoped>
.timer {
  width: 100%;
  text-align: center;
}
.warning {
  color: red;
}
</style>
