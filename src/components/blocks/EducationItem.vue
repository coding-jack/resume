<template>
  <div class="school py-4">
    <header class="d-flex align-items-start">
      <div class="school-info">
        <h4 class="h5 school-title text-green font-weight-black">{{ title }}</h4>
        <h5 class="text-light">{{ location }}</h5>
      </div>
      <div v-if="startDate && endDate" class="enrollment-dates text-green text-center ml-auto">
        <h6>{{ startDate }} <span class="text-white"> to </span> {{ endDate }}</h6>
      </div>
    </header>
    <section v-if="degree" class="degree pb-3">
      <h6 class="d-inline font-weight-bold text-white">{{ degree }}</h6>
    </section>
    <section v-if="description" class="description">
      <p class="d-inline mb-0 text-light">{{ description }}</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'education-item',
    props: ['title', 'image', 'description', 'degree', 'location', 'endDate', 'startDate']
  }
</script>
<style lang="scss" scoped>
</style>
