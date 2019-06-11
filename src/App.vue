<template>
  <div id="app">
    <Header />
    <Profile />
    <Feed :posts="posts" />
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';
import Modal from './components/UI/Modal';

import posts from './data/dataFeed';

export default {
  name: 'app',
  components: {
    Header,
    Profile,
    Feed,
    Modal
  },
  data(){
    return { 
      posts: posts,
      showModal: false,
      currentImage: "Goku"
    }
  },
  methods:{
    newImage(){
      return this.currentImage = "pepe"
    }
  }
}
</script>

<style>
</style>
