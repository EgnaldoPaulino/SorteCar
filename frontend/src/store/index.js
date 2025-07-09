import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('/auth/login', credentials);
      commit('setUser', response.data.user);
    },
    async register({ commit }, userData) {
      const response = await axios.post('/auth/register', userData);
      commit('setUser', response.data.user);
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    }
  }
});

export default store;
