<template>
  <div id="app">
    <div class="container">
      <div class="left-section">
        <div class="heading-container">
          <one-heading/>
        </div>
        <div class="body-left-container">
          <div class="orders-list-container">
            <one-orders-list/>
          </div>
          <div class="order-details-container">
            <one-order-details/>
          </div>
        </div>
      </div>
      <div class="right-section">
        <div class="timer-container">
          <one-timer/>
        </div>
        <div class="input-container">
          <one-inputs/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from './components/Heading.vue';
import Inputs from './components/Inputs.vue';
import OrderDetails from './components/OrderDetails.vue';
import OrdersList from './components/OrdersList.vue';
import Timer from './components/Timer.vue';
import { Order } from './models';
import {createOrder} from './utils';

export default Vue.extend({
  name: 'app',
  components: {
    'one-heading': Heading,
    'one-inputs': Inputs,
    'one-order-details': OrderDetails,
    'one-orders-list': OrdersList,
    'one-timer': Timer
  },
  created() {
    this.$store.dispatch('generateNewOrder');
    this.$store.dispatch('generateNewOrder');
    this.$store.dispatch('generateNewOrder');
  }
});
</script>

<style>
* {
  /* border: 1px yellow solid; */
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
  font-family: sans-serif;
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
