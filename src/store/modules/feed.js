import axios from 'axios';

const state = {
  feeds: []
};

const getters = {
  allFeeds: (state) => state.feeds,
  selected: (state) => state.selectedImage,
  modal: (state) => state.showModal
};

const actions = {
  async fetchFeeds({commit}, i){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${i}`);
    commit('setFeeds', response.data);
  },



};

const mutations = {
  setFeeds: (state, feeds) => (state.feeds = feeds)
};

export default {
  state,
  getters,
  actions,
  mutations
}