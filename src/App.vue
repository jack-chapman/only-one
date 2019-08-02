<template>
  <div id="app">
    <div class="container">
      <div class="left-section">
        <div class="heading-container">
          <!-- heading here -->
        </div>
        <div class="body-left-container">
          <div class="orders-list-container">
            <!-- orders list here -->
          </div>
          <div class="order-details-container">
            <!-- order details here -->
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="timer-container">
          <!-- timer here -->
        </div>
        <div class="input-container">
          <!-- inputs here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  components: {
  }
});
</script>

<style>
* {
  border: 1px yellow solid;
}
body {
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 605px;
  width: 1090px;
  justify-content: space-between;
}

.left-section {
  width: 720px;
  height: 100%;
}

.right-section {
  width: 350px;
  height: 100%;
}

.heading-container {
  width: 100%;
  height: 10%;
}

.body-left-container {
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.orders-list-container {
  width: 45%;
  height: 100%;
}
.order-details-container {
  width: 45%;
  height: 100%;
}

.timer-container {
  height: 10%;
}

.input-container {
  height: 90%;
}
</style>
