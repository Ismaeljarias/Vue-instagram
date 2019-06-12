<template>
  <div id="profile">
    <div class="container">

      <div class="profile">
        <div class="col">
          <div class="profile-image">
            <img src="https://scontent-mia3-1.cdninstagram.com/vp/ee6c99f7305aaedef334cb8488b88963/5D8EA0B3/t51.2885-19/s320x320/46918899_287793308747889_1515852035029729280_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Profile Pics">
          </div>
        </div>

        <div class="col pad">
          <div class="profile-user-settings">
            <h1 class="profile-user-name">ismaeljarias</h1>
            <button class="btn profile-edit-btn">Edit Profile</button>
            <button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>
          </div>

          <div class="profile-stats">
            <ul>
              <li><span class="profile-stat-count">164</span> posts</li>
              <li><span class="profile-stat-count">188</span> followers</li>
              <li><span class="profile-stat-count">206</span> following</li>
            </ul>
          </div>
          <div class="profile-bio">
            <p><span class="profile-real-name">Ismael J. Arias M.<br /></span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
          </div>
        </div>

      </div>

    </div>
    <!-- End of profile section -->

  </div>
</template>

<script>
  export default {
   name: 'Profile' 
  }
</script>

<style lang="scss" src="../../scss/main.scss">
  
</style>