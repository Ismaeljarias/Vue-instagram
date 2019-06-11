<template>
  <div @click="getCurrentImage" class="image_container">
    <img :src="post.postImage" :alt="post.caption">
  </div>
</template>

<script>
import Modal from '../UI/Modal';
  export default {
   name: 'Item',
   props: ['post'],
   data(){
     return {
       feedImage: this.post.postImage
     }
   },
   methods:{
     getCurrentImage(){
       console.log(this.feedImage);
       this.$emit('getCurrentImage', this.feedImage);
     }
   }
  }
</script>

<style lang="scss" src="../../scss/main.scss"></style>