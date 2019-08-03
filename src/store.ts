import Vue from 'vue'
import Vuex from 'vuex'
import {Order, OrderRequest} from './models';
import {createOrder} from './utils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ordersList: Array<Order>(),
    isPlaying: false,
    gameOver: false,
    score: 0,
    possibleScore: 0,
    orderIndex: 0
  },
  getters: {
    currentOrder(state) {
      return state.ordersList[0];
    }
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
    setScore(state, payload: number) {
      state.score = payload;
    },
    setPossibleScore(state, payload: number) {
      state.possibleScore = payload;
    },
    incrementOrderIndex(state) {
      state.orderIndex = state.orderIndex + 1;
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
      const newOrder: Order = createOrder(state.orderIndex);
      commit('incrementOrderIndex');
      const list: Order[] = [...state.ordersList, newOrder];
      commit('setOrdersList', list)
    },
    nextOrder({commit, state, getters}, payload: OrderRequest) {
      commit('setPossibleScore', state.possibleScore + 1);
      const modelCorrect = payload.model === getters.currentOrder.model;
      const colourCorrect = payload.colour === getters.currentOrder.colour;
      const wheelsCorrect = payload.wheels === 'Only One';
      const orderCorrect = modelCorrect && colourCorrect && wheelsCorrect;
      console.log('model', payload.model, getters.currentOrder.model);
      console.log('colour', payload.colour, getters.currentOrder.colour);
      console.log('model', modelCorrect, 'colour', colourCorrect, 'wheels', wheelsCorrect);
      if (orderCorrect) {
        commit('setScore', state.score + 1);
      }
      const list = state.ordersList.slice(1);
      const newOrder: Order = createOrder(state.orderIndex);
      commit('incrementOrderIndex');
      commit('setOrdersList', [...list, newOrder]);
    }
  }
})
