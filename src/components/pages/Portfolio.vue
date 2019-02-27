<template>
  <div class="portfolio">
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
import PortfolioItem from '@/components/blocks/PortfolioItem'
export default {
  name: 'portfolio',
  components: {
    'page-content': PageContent,
    'portfolio-item': PortfolioItem
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
            },
            {
              title: '303 Beauty Bar',
              image: 'portfolio/wordpress/303.jpg',
              description: 'A Sage 9 & Wordpress site for a local beauty salon in Denver',
              link: 'https://303beautybar.com/'
            },
            {
              title: 'Kingsford Premium Wood Pellets',
              image: 'portfolio/wordpress/kingsford.jpg',
              description: 'A Sage 9 & Wordpress site for Kingsford\'s Wood Smoking Pellets Division',
              link: 'https://kingsfordpellets.com/'
            },
            {
              title: 'Pacific Steel Group',
              image: 'portfolio/wordpress/psg.jpg',
              description: 'A Sage 9 & Wordpress site for Pacific Steel Group',
              link: 'https://pacificsteelgroup.com/'
            },
            {
              title: 'M.Five Networking',
              image: 'portfolio/wordpress/m5.jpg',
              description: 'A Sage 9 & Wordpress site for M.Five Networking',
              link: 'http://www.m5networking.com/'
            },
            {
              title: 'Fly Fish Montana',
              image: 'portfolio/wordpress/flyfish.jpg',
              description: 'A Sage 9 & Wordpress site for a fly fishing tour guide in Bozeman, Montana',
              link: 'https://flyfishmontana.net/'
            },
            {
              title: 'Latsis Custom Homes',
              image: 'portfolio/wordpress/latsis.jpg',
              description: 'A Sage 9 & Wordpress site for a custom luxury homebuilder in Denver',
              link: 'https://latsiscustomhomes.com/'
            },
            {
              title: 'Wazee Partners',
              image: 'portfolio/wordpress/wazee.jpg',
              description: 'A Sage 9 & Wordpress site for a law firm in Denver',
              link: 'https://wazeepartners.com/'
            },
            {
              title: 'Clear Path',
              image: 'portfolio/wordpress/clearpath.jpg',
              description: 'A Sage 9 & Wordpress site for a patented device for further operation room safety',
              link: 'http://integratedst.wpengine.com/'
            }
          ]
        },
        {
          category: 'JS',
          projects: [
            {
              title: 'Trump Time',
              image: 'portfolio/js/trump-time.jpg',
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
