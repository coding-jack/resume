<template>
  <div class="nav-container">
    <b-nav>
      <div class="img-wrapper w-100 d-flex justify-content-center mb-4">
        <img class="profile-pic rounded-circle img-fluid d-none d-md-block" src="../../assets/bobross.jpg">
      </div>
      <div class="contact-area d-flex align-items-center justify-content-center w-100">
        <div class="contact-wrapper">
          <a class="nav-link d-inline" :href="'mailto:' + email"><font-awesome-icon icon="envelope"/></a>
          <span class="d-none d-lg-inline"> | </span>
          <a class="nav-link d-inline" :href="'tel:' + phone"><font-awesome-icon icon="mobile"/></a>
          <span class="d-none d-lg-inline"> | </span>
          <a class="nav-link d-inline" :href="githubUrl" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
        </div>
      </div>
      <div class="nav-area list-inline mx-auto">
        <b-nav-item class="list-inline-item" to="/" exact>About</b-nav-item>
        <b-nav-item class="list-inline-item" to="portfolio">Portfolio</b-nav-item>
        <b-nav-item class="list-inline-item" to="experience">Experience</b-nav-item>
        <b-nav-item class="list-inline-item" to="skills">Skills</b-nav-item>
        <b-nav-item class="list-inline-item" to="education">Education</b-nav-item>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'main-nav',
  data () {
    return {
      phone: '303-653-1861',
      email: 'jacksonkaufman115@gmail.com',
      githubUrl: '#'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-container {
  .nav-link {
    position: relative;
    padding: 0.25rem 0.5rem;
    color: blue;
    font-weight: 900;
    outline: 0;
  }
  @media screen and (min-width: 992px){
    .nav > .nav-item .nav-link {
      &.active { opacity: 0.5; }
    }
  }
}
</style>
