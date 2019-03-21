
<template>
  <div class="about text-left">
    <b-row>
      <b-col cols="12">
        <page-content :heading="name" :subheading=" profession"/>
        <page-content :subheading="location" />
        <page-content :age="age" />
        <b-row class="py-5">
          <b-col cols="8" class="mx-auto">
            <img src="../../assets/bobross.jpg" alt="" class="bio-pic img-fluid float-right ml-md-4">
            <div class="text-light" v-html="bioFirst"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="8" class="mx-auto">
            <img src="../../assets/ayes2.jpg" alt="" class="bio-pic img-fluid float-left mr-md-5">
            <div class="text-light" v-html="bioSecond"/>
          </b-col>
        </b-row>
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
      location: 'Denver, CO',
      age: 28,
      bioFirst: `
      <p>What's up! I'm Jackson!</p>
      <p>I grew up in Golden, Colorado so I'm one of the rare 'natives' who stuck around town, but I've also done my fair share of traveling and living in foreign countries.
      So trying something new is not foreign to me!</p>
      <p>Professionally, I'm most interested in mastering every aspect of Wordpress, PHP and Javascript, and exploring new languages such as Vue.js, React and Angular.</p>
      `,
      bioSecond: `
      <p>When I'm not coding and managing websites, you can find me on stage playing music with my friends, snowboarding up in the hills or rock climbing at the gym or outdoors.</p>
      <p>This resume was built with Vue.js and Bootstrap 4,
      feel free to <a href="https://github.com/coding-jack/resume" target="_blank">check out the source</a>.</p>
      <p>Thanks for visiting,<br>Jackson</p>
      `
    }
  }
}
</script>

<style lang="scss" scoped>

.bio-pic {
  border-radius: 8px;
  max-height: 339px;
}

</style>
