<template>
  <section class="page-content my-3 text-center">
    <b-row>
      <b-col md="7" class="mx-auto text-center">
        <h1 v-if="heading" class="text-brand text-shadow my-3">{{ heading }}</h1>
        <h2 v-if="subheading" class="font-weight-normal h4 text-light">{{ subheading }}</h2>
        <h2 v-if="age" class="font-weight-normal h4 text-light">{{ age }}</h2>
        <div v-if="description" class="mb-5 text-light" v-html="description"></div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'page-content',
  props: ['heading', 'subheading', 'description', 'age']
}
</script>

<style lang="scss" scoped>
h1 {
  letter-spacing: 2px;
  text-shadow: #161219 0px 1px 2px;
  font-family: 'Amiri', Helvetica, serif;
  font-size: 3.5rem;
}
</style>
