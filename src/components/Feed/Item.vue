<template>
  <div class="image_container">
     <img :src="post.postImage" :alt="post.caption">
  </div>
</template>

<script>
  export default {
   name: 'Item',
   props: ['post']
  }
</script>

<style lang="scss" src="../../scss/main.scss"></style>