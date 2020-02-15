<template>
  <article class="DetailCard">
    <a href="" class="DetailCard-link">
      <img src="https://via.placeholder.com/220x300" alt="" class="DetailCard-img">
    </a>
    <div class="DetailCard-content">
      <h2 class="DetailCard-title Heading--head">Intake Form</h2>
      <div class="DetailCard-body">
        <slot></slot>
      </div>
    <cta-button url="https://google.com">
      Download
    </cta-button>
    </div>
  </article>
</template>

<script>
import CtaButton from '@/components/CtaButton.vue'

export default {
  components: {
    CtaButton
  }
}
</script>

<style lang="scss">
.DetailCard
{
  padding: unit(50);
  border: 1px solid $light-gray;

  @include query (sm)
  {
    display: flex;
    padding: unit(100);
  }

  &-content
  {
    margin-left: unit(100);
  }
}
</style>