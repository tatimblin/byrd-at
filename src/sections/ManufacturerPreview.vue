<template>
  <section class="ManuPreview">
    <div class="ManuPreview-container">
      <div class="ManuPreview-content">
        <h2 class="ManuPreview-title Heading--head">Our Manufacturers</h2>
        <p class="ManuPreview-body">We work with the best.</p>
      </div>
      <ul class="ManuPreview-icons">
        <img class="ManuPreview-icon" src="https://via.placeholder.com/100" alt="">
        <img class="ManuPreview-icon" src="https://via.placeholder.com/100" alt="">
        <router-link to="/manufacturers" class="ManuPreview-icon">
          (See all)
        </router-link>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ManuPreview
{
  @include l-section;
  padding: unit(100) 0;
  background-color: $brand-primary;
  color: white;

  @include query (md)
  {
    padding: unit(200) 0;
  }

  &-container
  {
    @include l-container;

    @include query (sm)
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &-icon
  {
    &:not(:first-child)
    {
      margin-left: unit(100);
    }
  }
}
</style>