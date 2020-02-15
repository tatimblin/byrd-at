<template>
  <main class="Resources">
    <page-heading title="Resources" desc="Download our paper work." />
    <div class="Resources-list">
      <detail-card>
        <p>Fill this out.</p>
      </detail-card>
    </div>
  </main>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue'
import DetailCard from '@/components/DetailCard.vue'

export default {
  components: {
    PageHeading,
    DetailCard
  }
}
</script>

<style scoped lang="scss">
.Resources
{
  &-list
  {
    @include l-container;
    @include l-section;
  }
}
</style>