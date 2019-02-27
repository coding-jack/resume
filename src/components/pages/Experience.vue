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
        <p>I've been dabbling with web technologies for about 5 years and I landed a job about 2 years ago. I was fortunate enough to grow my coding knowledge in a real workspace getting hands on experience.</p>
        <p>My bandmate, who is a self taugh coder like myself, was kind enough to put in a good word for me at his place of work after I had done enough studying on my own, and luckily I landed my first coding job!</p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Senior Developer',
          startDate: '10312017',
          endDate: '10262018',
          techUsed: ['Wordpress', 'Laravel', 'Sage 8/9'],
          description: 'I work here now.  Wudup'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
