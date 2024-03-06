import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: null,
  },
  getters: {
    ARTICLES: (state) => {
      return state.articles;
    },
  },
  mutations: {
    SET_ARTICLES: (state, payload) => {
      state.articles = payload;
    },
  },
  actions: {
    GET_ARTICLES: async (context) => {
      let data = [];
      await fetch(
        'https://my-json-server.typicode.com/shipengineer/JSON_server/articles'
      )
        .then((responce) => responce.json())
        .then((transformed) => {
          data.push(transformed);
        });
      context.commit('SET_ARTICLES', data);
    },
  },
  modules: {},
});
