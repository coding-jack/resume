<template>
  <div class="education">
    <page-content :heading="$route.name" :description="description"/>
    <b-row v-for="category in work" :key="category.id" class="pb-3">
      <b-col cols="12" class="text-right">
        <h2 class="h3 text-green font-weight-black mb-4">{{ category.category }}</h2>
      </b-col>
      <b-col cols="12" class="">
        <b-row>
          <portfolio-item
          v-for="project in category.projects"
          :image="project.image"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :key="project.id"
          />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageContent from '@/components/blocks/PageContent'
import EducationItem from '@/components/blocks/EducationItem'
export default {
  name: 'education',
  components: {
    'page-content': PageContent,
    'education-item': EducationItem
  },
  data () {
    return {
      description: '',
      work: [
        {
          category: 'Wordpress',
          projects: [
            {
              title: 'Metro Optical',
              image: 'portfolio/wordpress/metro.jpg',
              description: 'A futuristic/sci-fi design built with Sage 9 and Wordpress for Metro Optical telecom.',
              link: 'http://metrooptical.com'
            },
            {
              title: 'Symplicity',
              image: 'portfolio/wordpress/symplicity.jpg',
              description: 'A Sage 9 & Wordpress site for Symplicity Communications.',
              link: 'http://symplicitycom.com'
            },
            {
              title: 'Dmarie and Co.',
              image: 'portfolio/wordpress/dmarie.jpg',
              description: 'A Sage 9 & Wordpress site for Dmarie and Co.',
              link: 'http://dmarieandco.com'
            },
            {
              title: 'Knoff Group Real Estate',
              image: 'portfolio/wordpress/knoff.jpg',
              description: 'A Sage 9 & Wordpress site with IDX integration for Knoff Group Real Estate in Montana',
              link: 'https://knoffgroup.com'
            }
          ]
        },
        {
          category: 'JS',
          projects: [
            {
              title: 'Trump Time',
              image: 'portfolio/js/trump-time.png',
              description: 'Trump Time is a web app that allows you to generate your own fake Time magazine covers.',
              link: 'http://pi-mont.github.io/trump-time'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
