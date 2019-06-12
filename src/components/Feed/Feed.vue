<template>
  <div id="feed">
    <div class="feed_menu">
      <ul>
        <li><a class="active" href="#">Post</a></li>
        <li><a href="#">igtv</a></li>
        <li><a href="#">saved</a></li>
        <li><a href="#">tagged</a></li>
      </ul>
    </div>

    <div class="container">
      <div class="gallery">
        <div class="gallery-item" @click="getSelected($event)" v-for="feed in allFeeds" :key="feed.id">
          <img @click="showModal(modal)" :src="feed.url" :alt="feed.caption" class="gallery-image" />
          <div class="gallery-item-info">
            <ul>
              <li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> 56</li>
              <li class="gallery-item-comments"><span class="visually-hidden">Comments:</span><i class="fas fa-comment" aria-hidden="true"></i> 2</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End of gallery -->

      <div class="loader"></div>

    </div>
    <!-- End of container -->

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Feed',
  methods:{
    ...mapActions(['fetchFeeds', 'getSelected', 'showModal'])
  },
  computed: mapGetters(['allFeeds','modal']),
  created(){
    this.fetchFeeds();
  }
}
</script>

<style lang="scss" src="../../scss/main.scss">


</style>