<template>
  <header>
    <div class="header_elements">
      <a href="#" class="logo item">
        <img src="../../assets/logo.png" class="logo" />
      </a>
      <SearchBar></SearchBar>
      <Menu></Menu>
      
    </div> 
  </header>
</template>

<script>
import SearchBar from './SearchBar';
import Menu from './Menu';

  export default {
   name: 'Header',
   components: {
     SearchBar,
     Menu
   }
  }
</script>

<style lang="scss" src="../../scss/main.scss">


</style>