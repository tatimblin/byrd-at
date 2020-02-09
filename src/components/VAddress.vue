<template>
  <address class="Address">
    <span class="Address-street">{{ address.street }}</span>,
    <span class="Address-city">{{ address.city }}</span>,
    <span class="Address-state"><abbr :title="address.state">{{ address.stateAbbr }}</abbr></span>
    <span class="Address-zip"> {{ address.zip }}</span>
  </address>
</template>

<script>
export default {
  data () {
    return {
      address: {
        street: '13897 Willard Rd, Suite A',
        city: 'Chantilly',
        state: 'Virginia',
        stateAbbr: 'VA',
        zip: '20151'
      },
    }
  }
}
</script>
