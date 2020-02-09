<template>
  <section class="Callout" :class="reverse ? 'Callout--reverse' : ''">
    <img v-if="img && altText" :src="getImage(img)" :alt="altText" class="Callout-img">
    <div class="Callout-content">
      <h2 class="Callout-title Heading--head">
        {{ title }}
      </h2>
      <div class="Callout-body">
        <slot></slot>
      </div>
      <div v-if="ctaUrl" class="Callout-button">
        <cta-button :href="ctaUrl">
          {{ ctaLabel ? ctaLabel : 'Learn More' }}
        </cta-button>
      </div>
    </div>
  </section>
</template>

<script>
import CtaButton from '@/components/CtaButton.vue'

export default {
  components: {
    CtaButton
  },
  props: {
    img: String,
    altText: String,
    title: String,
    ctaUrl: String,
    ctaLabel: String,
    reverse: Boolean
  },
  methods: {
    getImage () {
      return require(`../assets/${this.img}`)
    }
  }
}
</script>

<style scoped lang="scss">
.Callout
{
  @include l-container;
  @include l-section;
  display: flex;
  flex-direction: column;

  @include query (sm)
  {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &--reverse
  {
    @include query (sm)
    {
      flex-direction: row-reverse;
    }
  }

  &-img,
  &-content
  {
    width: calc(50% - #{$spacing});
  }

  &-button
  {
    margin-top: unit(50);
  }
}
</style>