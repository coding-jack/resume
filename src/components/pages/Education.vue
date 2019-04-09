<template>
  <div class="education">
    <page-content :heading="$route.name" :description="description"/>
    <div class="education">
      <education-item
      v-for="school in schools"
      :key="school.id"
      :title="school.title"
      :description="school.description"
      :startDate="school.startDate"
      :endDate="school.endDate"
      :degree="school.degree"
      :location="school.location"
      />
    </div>
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
      description: '<p>Although my educational path has taken many directions in my life, I can never stop being a student.  I am always striving to learn more and to be better at whatever it is I am doing at that moment.</p>',
      schools: [
        {
          title: 'University of Northern Colorado',
          location: 'Greeley, CO',
          description: 'I started out at the Monfort College of Business as a Management emphasis.  I thought the classes in management were pointless, and that good managers learn the most from experience.  I was always good with numbers and I was naturally performing well in my finance classes, so I switched my major and performed near the top of my class.  I was tested, interviewed and accepted into the Student and Foundation Fund which actively managed -at the time- over $1.2 million of real money in the stock market.  I also competed in the CFA Research Challenge held between six top finance schools in the state, and I was a manager of the first Socially Resposible Investment Fund at the School.',
          degree: 'Bachelors in Business Administration with an Emphasis in Finance and a Minor in Music',
          startDate: 'Fall of 2009',
          endDate: 'Fall of 2013',
        },
        {
          title: 'ISM University of Mangement and Economics',
          location: 'Vilnius, Lithuania',
          degree: 'Study Abroad - Credit Towards my Bachelors Degree',
          description: 'My time in Vilnius undoubtedly changed my life.  A last minute decision to study abroad in a part of the world I could not find on a map lead to an enormously bigger learning and development experience than anything I could have dreamed of.  I learned how to immerse myself in the unknown and find my own way, to socialize in a sometimes uncomfortable setting, and make life-long friendships that I cherish to this day.  Living in Vilnius taught me how valuable it can be leave your comfort zone and explore the unknown, and to embrace that rather than be afraid of it.  I am a happier and more corageous person because of it.  Oh, and I helped the school start their own student run investment fund class.',
          startDate: 'January 2013',
          endDate: 'June 2013',
        },
        {
          title: 'D\'Evelyn Jr./Sr. High School',
          location: 'Lakewood, CO',
          description: 'D\'Evelyn is a great college prep school that taught me how to study and procrastinate successfully.  I am still very good friends with just about every friend I made there, and I think that has been the most valuable take-away.  I was in student counsel, jazz band, concert choir and all-state choir.',
          startDate: 'August 2003',
          endDate: 'May 2009',
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
