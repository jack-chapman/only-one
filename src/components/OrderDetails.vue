<template>
  <div class="order-container">
    <h3>Customer Details</h3>
    <div class="key-val">
      <p class="key">Order No.</p>
      <p class="val">{{orderNumber}}</p>
    </div>
    <div class="key-val">
      <p class="key">Name</p>
      <p class="val">{{order.name}}</p>
    </div>
    <div class="key-val">
      <p class="key">Address</p>
      <p class="val">{{order.address}}</p>
    </div>
    <hr>
    <h3>Order Details</h3>
    <div class="key-val">
      <p class="key">Model</p>
      <p class="val">{{order.model}}</p>
    </div>
    <div class="key-val">
      <p class="key">Colour</p>
      <p class="val">{{order.colour}}</p>
    </div>
    <div class="key-val">
      <p class="key">Number of wheels</p>
      <p class="val">Only One</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Order } from '../models';
export default Vue.extend({
  data() {
    return {
      orderNumber: ''
    }
  },
  created() {
    this.orderNumber = [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('')
  },
  computed: {
    order(): Order {
      return this.$store.state.currentOrder;
    }
  }
})
</script>

<style lang="scss" scoped>
.key-val {
  display: flex;
  justify-content: space-between;
  .key {
    margin-left: 10px;
  }
  .val {
    margin-right: 10px;
    font-weight: bold;
  }
}
</style>
