import Vue from 'vue'
import Vuex from 'vuex'
import {Order} from './models';
import {createOrder} from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ordersList: Array<Order>(),
    currentOrder: <Order>{},
    isPlaying: false,
    gameOver: false,
    score: 0
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
    },
    setScore(state, payload: number) {
      state.score = payload;
    }
  },
  actions: {
    endGame({commit}) {
      commit('setGameOver', true);
    },
    startGame({commit}) {
      commit('setGameOver', false);
      commit('setIsPlaying', true);
    },
    resetGame({commit}) {
      commit('setGameOver', false);
      commit('setIsPlaying', false);
    },
    generateNewOrder({commit, state}) {
      const newOrder: Order = createOrder();
      const list: Order[] = [...state.ordersList, newOrder];
      commit('setOrdersList', list)
    }
  }
})
