<template>
  <div class="Home">
    <div class="Hero">
      <div class="Hero-container">
        <div class="Hero-item">
          <h1 class="Hero-title Heading--lead">
            Experience Mobility & Independence With Byrd Assistive Technologies
          </h1>
          <p class="Hero-body">
            Byrd Assistive Technologies is a premier provider of medical equipment and assistive technology
            services. We bring the expertise required to recommend the necessary mobility products and assistive
            technology services to the mobility challenged community.
          </p>
        </div>
        <div class="Hero-item">
          <img class="Hero-img" src="../assets/images/achc-accredited.webp" alt="ACHC Accredited">
        </div>
      </div>
    </div>
    <call-out id="about"
      title="What we do"
      img="logo.png"
      altText="Child in a custom Byrd wheelchair"
      ctaUrl="https://google.com/">
      <h3 class="Heading--sub">
        Our capabilities include the following, but our willingness to satisfy our customers goes well beyond.
      </h3>
      <ul>
        <li>FREE Service evaluations by our experienced and professional technicians</li>
        <li>Seating evaluations with our qualified seating experts</li>
        <li>Full chair functions troubleshooting including chair diagnostics</li>
        <li>Customization services to fit your individual concerns and needs</li>
      </ul>
    </call-out>
    <manufacturer-preview />
    <call-out
      title="Who we are"
      img="logo.png"
      altText="The Byrd AT team"
      ctaUrl="https://google.com/"
      reverse>
      <h3 class="Heading--sub">
        DME & technology providers that create greater independence & control for disabled individuals.
      </h3>
      <p>Byrd Assistive Technologies is your one-stop-shop for all your medical equipment and mobility needs.
        As a leading Durable Medical Equipment provider in Virginia, we supply our customers with cutting
        edge and customizable medical equipment and unsurpassed customer service. Here at BYRD Assistive
        Technologies, we value our customers and go above and beyond to make sure they are satisfied with
        their equipment needs. We are fueled by our commitment to customer satisfaction and strive to
        exceed our clients' expectations.
      </p>
    </call-out>
    <our-loc />
    <pre-footer />
  </div>
</template>

<script>
import CallOut from '@/components/CallOut.vue'
import ManufacturerPreview from '@/sections/ManufacturerPreview.vue'
import OurLoc from '@/sections/OurLoc.vue'
import PreFooter from '@/components/PreFooter.vue'

export default {
  name: 'Home',
  components: {
    CallOut,
    ManufacturerPreview,
    OurLoc,
    PreFooter
  }
}
</script>

<style scoped lang="scss">
.Hero
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: $hero-height;
  background-color: $brand-bg;

  &-container
  {
    @include l-container;
    display: flex;
  }

  &-img
  {
    max-width: 200px;
  }
}
</style>
