import axios from 'axios';

const state = {
  feeds: [],
  selectedImage: '',
  showModal: false
};

const getters = {
  allFeeds: (state) => state.feeds,
  selected: (state) => state.selectedImage,
  modal: (state) => state.showModal
};

const actions = {
  async fetchFeeds({commit}){
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=15');

    commit('setFeeds', response.data);
  },

  async getSelected({commit}, e){
  //  Get selected Element
    const currentImage = e.srcElement.currentSrc;
    console.log(e);
    // commit('setImage', currentImage);
    
  },

  async showModal({commit}){
    state.showModal = !state.showModal;
    
    commit('setModal', !state.showModal);
  }


};

const mutations = {
  setFeeds: (state, feeds) => (state.feeds = feeds),
  setImage: (state, selectedImage) => (state.selectedImage = selectedImage),
  setModal: (state, setModal) => (state.showModal = !setModal)
};

export default {
  state,
  getters,
  actions,
  mutations
}