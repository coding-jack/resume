<template>
  <div class="nav-container">
    <b-nav class="d-flex align-items-center">
      <b-nav-item to="/" exact>About</b-nav-item>
      <b-nav-item to="experience">Experience</b-nav-item>
      <b-nav-item to="skills">Skills</b-nav-item>
      <b-nav-item to="portfolio">Portfolio</b-nav-item>
      <b-nav-item to="education">Education</b-nav-item>
      <div class="contact-area ml-auto d-flex align-items-center justify-content-end">
        <a class="nav-link d-inline" :href="'mailto:' + email"><font-awesome-icon icon="envelope"/></a>
        <span class="d-none d-lg-inline"> | </span>
        <a class="nav-link d-inline" :href="'tel:' + phone"><font-awesome-icon icon="mobile"/></a>
        <span class="d-none d-lg-inline"> | </span>
        <a class="nav-link d-inline" :href="githubUrl" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
        <img class="profile-pic rounded-circle img-fluid d-none d-md-block ml-3" src="../../assets/bobross.jpg">
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
