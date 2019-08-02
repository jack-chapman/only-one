import Vue from 'vue'
import Vuex from 'vuex'
import {Order} from './models';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ordersList: Array<Order>(),
    currentOrder: <Order>{},
    isPlaying: false,
    gameOver: false
  },
  mutations: {
    setIsPlaying(state, payload: boolean) {
      state.isPlaying = payload;
    },
    setGameOver(state, payload: boolean) {
      state.gameOver = payload;
    },
    setOrdersList(state, payload: Order[]) {
      state.ordersList = payload;
    },
    setCurrentOrder(state, payload: Order) {
      state.currentOrder = payload;
    }
  },
  actions: {

  }
})
