<template>
  <div class="nav-container w-100">
    <b-nav class="w-100">
      <b-nav-item to="/" exact>About</b-nav-item>
      <b-nav-item to="skills">Skills</b-nav-item>
      <b-nav-item to="experience">Experience</b-nav-item>
      <b-nav-item to="portfolio">Portfolio</b-nav-item>
      <div class="contact-area float-right d-flex align-items-beginning">
        <a class="nav-link d-inline" :href="'mailto:' + email"><font-awesome-icon icon="envelope"/></a>
        <span class="d-none d-lg-inline"> | </span>
        <a class="nav-link d-inline" :href="'tel:' + phone"><font-awesome-icon icon="mobile"/></a>
        <span class="d-none d-lg-inline"> | </span>
        <a class="nav-link d-inline" :href="githubUrl" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/></a>
        <img class="profile-pic rounded-circle img-fluid d-none d-md-block mb-lg-4 mr-auto mr-lg-0 ml-lg-auto" src="../../assets/bobross.jpg">
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
    color: #49b884;
    font-weight: 900;
    outline: 0;
  }
  @media screen and (min-width: 992px){
    position: fixed;
    .nav > .nav-item .nav-link {
      &::after {
        content: '❮';
        margin-left: 10px;
        opacity: 1;
      }
      &.active { opacity: 0.5; }
    }
  }
}
</style>
