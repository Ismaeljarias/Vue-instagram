<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="col selected">
            <img :src="selected" alt="" />
          </div>

          <div class="col profile">
            <div class="profile_pic">
                <img src="https://scontent-mia3-1.cdninstagram.com/vp/ee6c99f7305aaedef334cb8488b88963/5D8EA0B3/t51.2885-19/s320x320/46918899_287793308747889_1515852035029729280_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Profile Pics">
              </div>
              <div class="username">
                ismaeljariasm
              </div>
              <div class="location">
                xxxxxx xxxxx xxxxx
              </div>
          </div>
          <div class="comment">
            Comments
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="showModal">
                OK
              </button>
            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'Modal',
  methods:{
    ...mapActions(['showModal'])
  },
  computed: mapGetters(['selected', 'modal'])
}
</script>

<style lang="scss" src="../../scss/main.scss">

</style>
