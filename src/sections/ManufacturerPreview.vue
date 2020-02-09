<template>
  <section class="ManufacturerPreview">
    <div class="ManufacturerPreview-container">
      <div class="ManufacturerPreview-content">
        <h2 class="ManufacturerPreview-title Heading--head">Our Manufacturers</h2>
        <p class="ManufacturerPreview-body">We work with the best.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.ManufacturerPreview
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
  }
}
</style>