<template>
  <div class="skills">
    <page-content :heading="$route.name" :description="description"/>
    <div class="skill-list">
      <skill v-for="skill in skills" :heading="skill.heading" :list="skill.list" :key="skill.id"/>
    </div>
  </div>
</template>

<script>
import PageContent from '@/components/blocks/PageContent'
import Skill from '@/components/blocks/Skill'
export default {
  name: 'skills',
  components: {
    'page-content': PageContent,
    'skill': Skill
  },
  data () {
    return {
      description: `
        <p>The coding skills I've learned have been through numerous online courses and free resources, as well as hands on experience through working at Graphik.  In coding there is always a new and unique problem to solve, and thus, never a dull moment.</p>
      `,
      skills: [
        {
          heading: 'Web',
          list: ['HTML5', 'JS', 'CSS3/SCSS', 'PHP', 'Responsive Design', 'Bootstrap',]
        },
        {
          heading: 'Wordpress',
          list: ['Sage 8/9', 'Bedrock', 'Trellis', 'ACF Pro', 'Gutenberg', 'WPEngine']
        },
        {
          heading: 'PHP',
          list: ['Laravel', 'Blade', 'Wordpress']
        },
        {
          heading: 'JS',
          list: ['Vue.js', 'jQuery', 'Node', 'Webpack']
        },
        {
          heading: 'CLI',
          list: ['Git', 'NPM/Yarn', 'WP-CLI', 'Brew', 'Bower', 'Gulp']
        },
        {
          heading: 'Database',
          list: ['MySQL', 'SQLite', 'MAMP Pro', 'phpMyAdmin']
        },
        {
          heading: 'Tools: Coding',
          list: ['VS Code', 'Transmit', 'iTerm', 'Sequel Pro']
        },
        {
          heading: 'Tools: Design ',
          list: ['Sketch', 'Photoshop', 'Illustrator']
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
