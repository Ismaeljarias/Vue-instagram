<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="selected">
            <img v-if="item != null" :src="item.url" alt="" />
          </div>

         <div class="container">
          <div class="profile_container">
            <div class="profile_pic">
                <img src="https://scontent-mia3-1.cdninstagram.com/vp/ee6c99f7305aaedef334cb8488b88963/5D8EA0B3/t51.2885-19/s320x320/46918899_287793308747889_1515852035029729280_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Profile Pics">
              </div>
              <div class="username">
                ismaeljariasm
                <span class="location">xxxxxx xxxxx xxxxx</span>
              </div>
          </div>

          <div class="modal-footer">
            <div class="comment">
              Comments
            </div>
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')"> 
                X
              </button>
            </slot>
          </div>

         </div>




        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
  props:['item'],
  data(){
    return{
      showModal: false
    }
  }
}
</script>

<style lang="scss" src="../../scss/main.scss">

</style>
