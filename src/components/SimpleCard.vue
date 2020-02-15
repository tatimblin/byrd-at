<template>
  <article class="SimpleCard">
    <a :href="url" target="_blank" rel="noopener" class="SimpleCard-content">
      <img :src="getImage(image)" :alt="`Logo of ${title}`" v-if="image" class="SimpleCard-image">
      <h3 class="SimpleCard-title Heading--sub">
        {{ title }}
      </h3>
    </a>
  </article>
</template>

<script>
export default {
  props: ['title', 'url', 'image'],
  methods: {
    getImage (image) {
      if (image !== 'logo.png') {
        return require(`../assets/${image}`)
      }
      return 'https://via.placeholder.com/150'
    }
  },
}
</script>

<style lang="scss">
.SimpleCard
{
  text-align: center;

  &-content
  {
    display: block;
  }
}
</style>