<template>
  <main class="Manufacturers">
    <page-heading title="Manufacturers Directory" desc="We work with the best." />
    <ul class="Manufacturers-directory">
      <li class="Manufacturers-item" v-for="logo in logos" :key="logo.name">
        <simple-card :title="logo.name" :url="logo.url" :image="logo.image" />
      </li>
    </ul>
  </main>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue'
import SimpleCard from '@/components/SimpleCard.vue'

export default {
  components: {
    PageHeading,
    SimpleCard
  },
  data () {
    return {
      logos: [
        {
          name: 'Merits',
          url: 'http://www.meritshealth.com/',
          image: 'logo.png'
        },
        {
          name: 'Wenzelite',
          url: 'http://www.wenzelite.com/',
          image: 'logo.png'
        },
        {
          name: 'Action',
          url: 'http://www.actionproducts.com/',
          image: 'logo.png'
        },
        {
          name: 'Golden',
          url: 'https://www.goldentech.com/',
          image: 'logo.png'
        },
        {
          name: 'Pride Mobility',
          url: 'http://www.pridemobility.com/',
          image: 'logo.png'
        },
        {
          name: 'Invacare',
          url: 'http://www.invacare.com/cgi-bin/imhqprd/default.jsp',
          image: 'logo.png'
        },
        {
          name: 'Innovation in Motion',
          url: 'http://www.mobility-usa.com/',
          image: 'logo.png'
        },
        {
          name: 'SleepSafe',
          url: 'http://sleepsafebed.com/',
          image: 'logo.png'
        },
        {
          name: 'Amigo',
          url: 'http://myamigo.com/',
          image: 'logo.png'
        },
        {
          name: 'Pedicraft',
          url: 'http://www.pedicraft.com/',
          image: 'logo.png'
        },
        {
          name: 'Inspired',
          url: 'http://www.inspiredbydrive.com/',
          image: 'logo.png'
        },
        {
          name: 'Colours',
          url: 'http://colourswheelchair.com/',
          image: 'logo.png'
        },
        {
          name: 'Danmar',
          url: 'http://www.danmarproducts.com/',
          image: 'logo.png'
        },
        {
          name: 'Transfer Master',
          url: 'http://www.transfermaster.com/',
          image: 'logo.png'
        },
        {
          name: 'Spinergy',
          url: 'https://www.spinergy.com/Wheelchair/',
          image: 'logo.png'
        },
        {
          name: 'Quantum Rehab',
          url: 'http://www.quantumrehab.com/',
          image: 'logo.png'
        },
        {
          name: 'Posey',
          url: 'http://www.posey.com/',
          image: 'logo.png'
        },
        {
          name: 'Supracor',
          url: 'http://www.supracor.com/',
          image: 'logo.png'
        },
        {
          name: 'Hard',
          url: 'http://www.hardmfg.com/',
          image: 'logo.png'
        },
        {
          name: 'Performance Health',
          url: 'https://www.performancehealth.com/',
          image: 'logo.png'
        },
        {
          name: 'Motion Concepts',
          url: 'http://www.motionconcepts.com/',
          image: 'logo.png'
        },
        {
          name: 'MK Powered',
          url: 'http://www.mkbattery.com/',
          image: 'logo.png'
        },
        {
          name: 'PDG Mobility',
          url: 'http://www.pdgmobility.com/',
          image: 'logo.png'
        },
        {
          name: 'Stealth Products',
          url: 'https://www.stealthproducts.com/',
          image: 'logo.png'
        },
        {
          name: 'Prime Engineering',
          url: 'http://www.primeengineering.com/',
          image: 'logo.png'
        },
        {
          name: 'Otto Bock',
          url: 'http://www.ottobockus.com/',
          image: 'logo.png'
        },
        {
          name: 'spinoFLEX',
          url: 'http://www.spinoflex.com/',
          image: 'logo.png'
        },
        {
          name: 'Varilite',
          url: 'http://www.varilite.com/',
          image: 'logo.png'
        },
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.Manufacturers
{
  &-directory
  {
    @include l-container;
    @include l-section;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &-item
  {
    width: 100%;
    margin-bottom: unit(50);
    border: 1px solid $light-gray;
    box-sizing: border-box;

    @include query (sm)
    {
      width: calc(50% - #{$gutter});
      margin-bottom: unit(100);
    }

    @include query (md)
    {
      width: calc(#{percentage(1/3)} - #{$gutter * 1.33});
    }

    @include query (lg)
    {
      width: calc(25% - #{$gutter * 1.5});
    }
  }
}
</style>