<template>
  <div class="job">
    <header class="d-flex align-items-start">
      <div class="job-info">
        <h4 class="d-inline-block text-green font-weight-black mr-2">{{ role }}</h4>
        <h6 class="d-md-inline-block">{{ company }}</h6>
        <h5 class="text-light">{{ location }}</h5>
      </div>
      <div v-if="startDate && endDate" class="employment-dates text-green text-center ml-auto">
        <h6 >{{ startDate }} <span class="text-white"> to </span> {{ endDate }}</h6>
      </div>
    </header>
    <section v-if="techUsed" class="tech-used">
      <ul class="tech-list list-separators list-inline mt-2 mb-3">
        <li class="list-inline-item text-green font-weight-bold text-light">Tech Used: </li>
        <li class="list-inline-item text-light" v-for="tech in techUsed" :key="tech.id">{{ tech }}</li>
      </ul>
    </section>
    <section v-if="description" class="description">
      <h6 class="d-inline text-green font-weight-bold mr-2 text-light">About: </h6>
      <p class="d-inline mb-0 text-light">{{ description }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'job',
  props: ['company', 'location', 'role', 'startDate', 'endDate', 'techUsed', 'description']
}
</script>

<style lang="scss" scoped>
$color-brand: #49b884;
.list-separators li:nth-child(2)::before {
  content: '';
}
</style>
