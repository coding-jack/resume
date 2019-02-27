<template>
  <b-col cols="12" md="6" class="education-item pb-4">
    <div class="image-container mb-3">
      <img :src="require(`@/assets/${image}`)" class="img-fluid rounded screenshot">
    </div>
    <h3 class="h5 education-title text-green font-weight-black">{{ title }}</h3>
    <p class="">{{ description }}</p>
  </b-col>
</template>

<script>
  export default {
    name: 'education-item',
    props: ['title', 'image', 'description', 'link', 'status']
  }
</script>
<style lang="scss" scoped>
</style>
