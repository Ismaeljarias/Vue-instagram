<template>
  <div id="feed">
    <div class="feed_menu">
      <ul>
        <li><a href="#">Post</a></li>
        <li><a href="#">igtv</a></li>
        <li><a href="#">saved</a></li>
        <li><a href="#">tagged</a></li>
      </ul>
    </div>
    
    <div class="item_container">
      <Item v-for="post in posts" :post="post" :key="post.id" />
    </div>

  </div>
</template>

<script>
import Item from './Item';

  export default {
   name: 'Feed',
   components:{
     Item
   },
  props:['posts']
  }
</script>

<style lang="scss" src="../../scss/main.scss">


</style>