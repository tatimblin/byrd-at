<template>
  <a :href="url" class="CtaButton" :target="{'_blank' : newTab}" :rel="{'noopener' : newTab}">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: String,
    newTab: Boolean
  }
}
</script>