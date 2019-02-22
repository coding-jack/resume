
<template>
  <div class="about text-left">
    <b-row>
      <b-col cols="12">
        <page-content :heading="name" :subheading=" 'profession: ' + profession"/>
        <page-content :subheading=" 'age: ' + age" />
        <img src="../../assets/bobross.jpg" alt="" class="bio-pic img-fluid float-right ml-md-4">
        <div v-html="bio"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageContent from '@/components/blocks/PageContent'
export default {
  name: 'about',
  components: {
    'page-content': PageContent
  },
  data () {
    return {
      // msg: 'Hello',
      name: 'Jackson Kaufman',
      profession: 'Full Stack Developer',
      age: 28,
      bio: `
      <p>Hey There! My name is Jackson Kaufman and I'm a full stack web developer from Golden, CO. <br class="d-none d-md-block">
      I'm one of the rare 'natives' who stuck around town, but I've also done my fair share of traveling and living in foreign countries.
      So trying something new is not foreign to me!</p>
      <p>Professionally, I'm most interested in mastering every aspect of Wordpress, PHP and Javascript, and exploring new languages and their capabilities such as Vue.js, React and Angular.</p>
      <p>I am currently employed by a small marketing firm located in the LODO part of Downtown Denver.
      After the Senior Developer at the firm decided to leave for another prospect about six months ago, I took over his responsibilties and I've been holding down the fort ever since!</p>
      <p>When I'm not coding and managing websites, you can find me in my new home studio creating music with my friends, snowboarding up in the hills or rock climbing at the gym or outdoors.</p>
      <p>This resume was built with Vue.js and Bootstrap 4, <br class="d-none d-md-block">
      feel free to <a href="#" target="_blank">view the source here</a>.</p>
      <p>Thanks for visiting,<br>Jackson</p>
      `
    }
  }
}
</script>

<style lang="scss" scoped></style>
