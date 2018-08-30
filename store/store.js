import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const getters = {
  count:function(state){
      return state.count +=100;
  }
}

const state={
  count:1
}

//同步修改 状态
const mutations={
  add(state){
      state.count++;
  },
  addTen(state, n) {
    state.count += n;
  },
  reduce(state){
      state.count--;
  }
}

//异步修改状态
const actions ={
  addAction(context){
      context.commit('add')
  },
  reduceAction({commit}){
      commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})