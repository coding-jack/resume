<template>
  <div class="portfolio">
    <page-content :heading="$route.name" :description="description"/>
    <b-row class="pb-3">
      <b-col cols="12" class="">
        <b-row>
          <portfolio-item
          v-for="project in projects"
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
      description: 'These sites range from being completely built by me, to shared efforts between me and one other developer.  I saw every one of these sites through, from blank slates to live.  I\'ve made additions and done maintenance on a multitude of other sites not listed here that are older and in far worse shape than these, but these are the fruits of my labor from the past two years, and I am proud of they way they all turned out.',
      projects: [
        {
          title: 'Knoff Group Real Estate',
          image: 'portfolio/wordpress/knoff.jpg',
          description: 'A Sage 9 & Wordpress site with IDX integration for Knoff Group Real Estate in Montana',
          link: 'https://knoffgroup.com'
        },
        {
          title: 'Save our Youth',
          image: 'portfolio/wordpress/soy.jpg',
          description: 'A Sage 9 & Wordpress website for a local non-profit that facilitates the connection between mentors and at-risk youth',
          link: 'https://saveouryouth.org/'
        },
        {
          title: 'Dmarie and Co.',
          image: 'portfolio/wordpress/dmarie.jpg',
          description: 'A Sage 9 & Wordpress site for Dmarie and Co.',
          link: 'http://dmarieandco.com'
        },
        {
          title: 'Symplicity',
          image: 'portfolio/wordpress/symplicity.jpg',
          description: 'A Sage 9 & Wordpress site for Symplicity Communications.',
          link: 'http://symplicitycom.com'
        },
        {
          title: '303 Beauty Bar',
          image: 'portfolio/wordpress/303.jpg',
          description: 'A Sage 9 & Wordpress site for a local beauty salon in Denver',
          link: 'https://303beautybar.com/'
        },
        {
          title: 'Latsis Custom Homes',
          image: 'portfolio/wordpress/latsis.jpg',
          description: 'A Sage 9 & Wordpress site for a custom luxury homebuilder in Denver',
          link: 'https://latsiscustomhomes.com/'
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
          title: 'Pacific Steel Group',
          image: 'portfolio/wordpress/psg.jpg',
          description: 'A Sage 9 & Wordpress site for Pacific Steel Group',
          link: 'https://pacificsteelgroup.com/'
        },
        {
          title: 'Wazee Partners',
          image: 'portfolio/wordpress/wazee.jpg',
          description: 'A Sage 9 & Wordpress site for a law firm in Denver',
          link: 'https://wazeepartners.com/'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
