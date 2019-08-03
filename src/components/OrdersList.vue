<template>
  <div class="list-container">
    <h3>Orders</h3>
    <transition-group name="list-complete" class="orders-list" tag="ul">
      <li class="order-item list-complete-item" :class="{'first': index === 0}" v-for="(order, index) in ordersArray" :key="order.id">
        <p>Order: {{order.id}}</p>
        <p>For: {{order.name}}</p>
      </li>
    </transition-group>
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
  padding: 0; 
}

.order-item {
  border-bottom: 1px grey solid;
  width: 274px;
}

.first {
  background-color: lightblue;
}
</style>

<style>
.list-complete-item {
  transition: all 0.2s;
  display: block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-274px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>

