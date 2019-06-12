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
        <div class="gallery-item" v-for="feed in allFeeds" :key="feed.id">
          <img @click="modalToShow(feed.id)" :src="feed.url" :alt="feed.caption" class="gallery-image" />
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
    <!-- use the modal component, pass in the prop -->
    <Modal :item="itemToShow" v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Modal from '../UI/Modal';

export default {
  name: 'Feed',
  components:{
    Modal
  },
  data(){
    return{
      showModal: false,
      itemToShowId: null,
      counter: 6
    }
  },
  methods:{
    ...mapActions(['fetchFeeds']),
    modalToShow(id){
      this.showModal = true;
      this.itemToShowId = id;
    },

    scroll(){
      window.onscroll = () => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          this.counter += 6;
          this.fetchFeeds(this.counter);
        }
      };
    }
  },
  computed: {
    ...mapGetters(['allFeeds']),
    itemToShow(){
      let itemToShow = null;
      if (this.itemToShowId != null) {
        for (let i = 0; i < this.allFeeds.length; i++) {
          if (this.itemToShowId == this.allFeeds[i].id) {
            itemToShow = this.allFeeds[i];
          }
        }
      }
      return itemToShow;
    }
  },
  mounted(){
    this.scroll();
  },
  created(){
    this.fetchFeeds(this.counter);
  }
}
</script>

<style lang="scss" src="../../scss/main.scss">


</style>