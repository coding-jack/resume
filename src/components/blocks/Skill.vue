<template>
  <div class="skill text-center py-2">
    <h5 class="font-weight-black d-block d-md-inline mr-2">{{ heading }}</h5>
    <ul class="list-separators mb-3 list-inline text-light">
      <li class="list-inline-item" v-for="item in list" :key="item.id"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skill',
  props: ['heading', 'list']
}
</script>

<style lang="scss" scoped></style>
