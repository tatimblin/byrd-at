<template>
  <section class="PreFooter">
    <router-link to="/contact" class="PreFooter-link">
      <div class="PreFooter-container">
        <h2 class="PreFooter-title Heading--head">Lets get started</h2>
        <p>Contact us for a free consultation</p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.PreFooter
{
  &-link
  {
    display: block;
    padding: unit(100) 0;
    background-color: $brand-primary;
    color: white;
    transition: background-color $dur $ease;

    @include query (md)
    {
      padding: unit(200) 0;
    }

    &:hover
    {
      background-color: darken($brand-primary, 5%);
    }
  }

  &-container
  {
    @include l-container;
    text-align: center;
  }
}
</style>