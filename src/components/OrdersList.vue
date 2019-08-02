<template>
  <div class="list-container">
    <h3>Orders</h3>
    <ul class="orders-list">
      <li class="order-item" :class="{'first': index === 0}" v-for="(order, index) in ordersArray" :key="index">
        <p>Order: {{index + 1}}</p>
        <p>For: {{order.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Order } from '../models';
export default Vue.extend({
  computed: {
    ordersArray(): Order[] {
      return this.$store.state.ordersList;
    }
  }
});
</script>

<style lang="scss" scoped>
.list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.orders-list {
  list-style: none;
}

.order-item {
  border-bottom: 1px grey solid;
}

.first {
  background-color: lightblue;
}
</style>
