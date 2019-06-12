<template>
  <div id="app">
    <Header />
    <Profile />
    <!-- use the modal component, pass in the prop -->
    <modal v-if="modal" @click="modal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">custom header</h3>
    </modal>

    <Feed />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';
import Modal from './components/UI/Modal';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'app',
  components: {
    Header,
    Profile,
    Feed,
    Modal
  },
  methods:{
    ...mapActions(['showModal'])
  },
  computed: mapGetters(['modal']) 
}
</script>

<style>
</style>
