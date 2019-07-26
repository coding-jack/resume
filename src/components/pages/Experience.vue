<template>
  <div class="experience">
    <page-content :heading="$route.name" :description="description"/>
    <div class="jobs">
      <job
        v-for="job in jobs"
        :key="job.id"
        :company="job.company"
        :location="job.location"
        :role="job.role"
        :startDate="job.startDate"
        :endDate="job.endDate"
        :techUsed="job.techUsed"
        :description="job.description"
        class="py-4"
      />
    </div>
  </div>
</template>
<script>
import PageContent from '@/components/blocks/PageContent'
import Job from '@/components/blocks/Job'
export default {
  name: 'experience',
  components: {
    'page-content': PageContent,
    'job': Job
  },
  data () {
    return {
      description: `
        <p>I've been dabbling with web technologies for about 5 years and I landed a job about 2 years ago. I was fortunate enough to grow my coding knowledge in a real workspace getting hands on experience under an extremely skilled mentor.</p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Full Stack Developer',
          startDate: 'September 2018',
          endDate: 'May 2019',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9'],
          description: 'After the senior dev decided to leave the firm in September of last year, I was promoted to Lead Dev for the company and I have been holding down the fort by myself ever since!  Not only is it cool to have the rest of the company come to me when they need help with anything that is over their heads, but I also call the shots on evertyhing dev related.  My current responsibilities include, but are not limited to, actively maintenaning over 14 sites, fixing any issues/breakage whatsoever with live sites, overseeing the creation of a site from initial coding to taking it live, and anything else that pops up on a daily basis.  I have honed in skills like moving old battered sites from host to host manually, debugging malware and solving compatibility issues with plugins.'
        },
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Junior Developer',
          startDate: 'May 2017',
          endDate: 'September 2018',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9'],
          description: 'Starting my coding career here has been nothing short of huge blessing for me.  Working with the small team of badass designers and an even more badass dev mentor to build custom themes and sweet sites was a huge leg up at the time for a newbie like me. I quickly became familiar with the wordpress file structure, custom post types, Sage 8/9 frameworks, php, sass, cli tools, node package manager, git, responsive development, bootstrap, webpack, ftp, mimicing design from sketch, illustrator and photoshop, and many other incredibly valuable skills in the coding workplace.'
        },
        {
          company: 'Steamboat Snowmobile Tours',
          location: 'Steamboat Springs, CO',
          role: 'Snowmobile Tour Guide',
          startDate: 'December 2016',
          endDate: 'April 2017',
          description: 'Yes, this was my job before coding. My buddy was able to put in a good word for me to get a job here and live right next to the mountain, so I couldn\'t say no.  After working numerous restaurant and canvassing jobs post graduation, this seemed like a dream come true.  I would probably still be doing it, but the music and career opportunities in Denver beckoned me back. To see my full list of previous work experience check out my LinkedIn Profile.'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
