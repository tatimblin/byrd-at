<template>
  <section class="PageHeading">
    <div class="PageHeading-container">
      <h1 class="PageHeading-title Heading--lead">
        {{ title }}
      </h1>
      <p v-if="desc" class="PageHeading-desc">
        {{ desc }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageHeading',
  props: {
    title: String,
    desc: String,
  }
}
</script>

<style scoped lang="scss">
.PageHeading
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: $hero-height;
  background-color: $brand-bg;

  &-container
  {
    @include l-container;
    text-align: center;
  }
}
</style>
