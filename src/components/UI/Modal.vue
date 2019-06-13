<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <article>
            <header class="header">
              <div class="profile_pic">
                <img src="https://scontent-mia3-1.cdninstagram.com/vp/ee6c99f7305aaedef334cb8488b88963/5D8EA0B3/t51.2885-19/s320x320/46918899_287793308747889_1515852035029729280_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Profile Pics">
              </div>
              <div class="user_data">
                <div class="username">
                  <h2>ismaeljariasm</h2>
                </div>
                <div class="location">
                  xxxxx xxxxxxx xxxxxxx
                </div>
              </div>
            </header>
            <div class="img_container">
              <img class="image_modal" v-if="item != null" :src="item.url" alt="" />
            </div>
            <div class="comment_area">
              <ul>
                <li>
                  <div class="comments">
                    <div class="profile_pic">
                      <img :src="item.url" alt="Profile Pics">
                    </div>
                    <div class="comment_data">
                      <h2>User Name</h2>
                      <span class="user_comment">
                        #blablabla #blablaba
                      </span>
                      <div class="time">
                        102W
                      </div>
                    </div>
                  </div>
                </li>
                
              </ul>
              
              

            </div>
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')"> 
                X
              </button>
            </slot>
          </article>

        </div>
      </div>
    <div id="modal-backdrop" class="modal-backdrop-transparent modal-transition" @click="$emit('close')"></div>
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
