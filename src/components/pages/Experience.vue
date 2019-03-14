<template>
  <div class="experience">
    <page-content :heading="$route.name" :description="description"/>
    <div class="jobs">
      <job
        v-for="job in jobs"
        :key="job.id"
        :company="job.company"
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
        <p>I've been dabbling with web technologies for about 5 years and I landed a job about 2 years ago. I was fortunate enough to grow my coding knowledge in a real workspace getting hands on experience.</p>
        <p>I am currently employed by a small marketing firm located in the LODO part of Downtown Denver.
        After the Senior Developer at the firm decided to leave for another prospect about six months ago, I took over all dev duties and responsibilties for the firm and I've been holding down the fort ever since!</p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Full Stack Developer',
          startDate: '09262018',
          endDate: 'current',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9'],
          description: 'Monthly maintenance on over 14 sites.  Moving from host to host manually, debugging malware. Helping designers with backend navigation, downloading latest designer software/tools.'
        },
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Junior Developer',
          startDate: '10312017',
          endDate: '09262018',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9'],
          description: 'Getting acquainted with building Custom Themes. wordpress file structure, cpt, Sage 8/9, php, sass, npm, cli tools, git, responsive development, mimicing design from sketch, illustrator, photoshop, webpack, ftp, .'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
