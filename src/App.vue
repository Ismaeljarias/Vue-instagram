<template>
  <div id="app">
    <Header />
    <Profile />
    <Feed />
  </div>
</template>

<script>

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Feed from './components/Feed/Feed';

export default {
  name: 'app',
  components: {
    Header,
    Profile,
    Feed,
    // Modal
  }
}
</script>

<style>
</style>
