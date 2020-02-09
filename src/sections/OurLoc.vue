<template>
  <section class="OurLoc">
    <div class="OurLoc-container">
      <div class="OurLoc-content">
        <h2 class="OurLoc-address Heading--head">
          <v-address />
        </h2>
        <ul class="OurLoc-phones">
          <li class="Phone" v-for="phone in phones" :key="phone.type">
            <span class="Phone-label">{{ phone.type }}</span>
            <a :href="stripPhone(phone.number)" class="Phone-link">{{ phone.number }}</a>
            <span class="Phone-copy">{{ phone.number }}</span>
          </li>
        </ul>
        <div class="OurLoc-email">
          <div class="Email">
            <a :href="`mailto:${email}`" class="Email-link">{{ email }}</a>
          </div>
        </div>
        <div class="OurLoc-ctas">
          <cta-button :url="directions">Get Directions</cta-button>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>

      <ul class="OurLoc-hours">
        <h3 class="Heading--head">Our Hours</h3>
        <v-hours />
      </ul>

      <div class="OurLoc-map">
        <a :href="directions" target="_blank" rel="noopener">
          <img src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l-wheelchair+2a66df(-77.4269,38.8868)/-77.4269,38.8868,14.03/600x400?access_token=pk.eyJ1IjoidGF0aW1ibGluIiwiYSI6ImNqM2RkZzNqNDAwMGMzM281dTdqMnNuNnYifQ.f-78RB94egBVWUwbVNYAig" alt="">
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import CtaButton from '@/components/CtaButton.vue'
import VAddress from '@/components/VAddress.vue'
import VHours from '@/components/VHours.vue'

export default {
  components: {
    CtaButton,
    VAddress,
    VHours
  },
  data () {
    return {
      phones: [
        {
          type: 'Main Phone',
          number: '(571) 252-5214'
        },
        {
          type: 'Fax',
          number: '(571) 659-6174'
        }
      ],
      email: 'info@byrd-at.com',
      directions: 'https://www.google.com/maps/place/Byrd+Assistive+Technologies/@38.8863571,-77.4295189,17z/data=!3m1!4b1!4m5!3m4!1s0x89b6442af5e70bb5:0x27dc75ba99d9fcda!8m2!3d38.8863571!4d-77.4273302',
    }
  },
  methods: {
    stripPhone (number) {
      return 'tel:' + number.replace(/[^0-9]/g, '')
    }
  }
}
</script>

<style scoped lang="scss">
.OurLoc
{
  &-container
  {
    @include l-container;
    @include l-section;
    
    @include query (lg)
    {
      display: flex;
    }
  }
}

.Phone
{
  &-link
  {
    @include query (sm)
    {
      display: none;
    }
  }

  &-copy
  {
    display: none;

    @include query (sm)
    {
      display: inline;
    }
  }
}
</style>