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
        <p>Since I only have on-the-job experience without a formal education in coding, I was fortunate enough to grow my coding knowledge in a real workspace getting hands on experience.</p>
        <p>My bandmate, who is also a self taught coder, was kind enough to put in a good word for me at his place of work after I had done enough studying on my own, and luckily I landed my first coding job!</p>
      `,
      jobs: [
        {
          company: 'Graphik Creative',
          location: 'Denver, CO',
          role: 'Senior Developer',
          startDate: '11092015',
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
