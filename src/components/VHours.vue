<template>
  <ul class="Hours">
    <li v-for="hour in hours" :key="hour.day" class="Hours-item" itemprop="openingHours" :content="schemaHours(hour)">
      <span class="Hours-day">{{ hour.day }}</span>
      <span class="Hours-time">
        <time class="Hours-hour">{{ twelveHour(hour.open) }}</time> - <time class="Hours-hour">{{ twelveHour(hour.close) }}</time>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      hours: [
        {
          day: 'Sunday',
          open: '10:00',
          close: '16:00'
        },
        {
          day: 'Monday',
          open: '10:00',
          close: '21:00'
        },
        {
          day: 'Tuesday',
          open: '10:00',
          close: '21:00'
        },
        {
          day: 'Wednesday',
          open: '10:00',
          close: '21:30'
        },
        {
          day: 'Thursday',
          open: '10:00',
          close: '21:30'
        },
        {
          day: 'Friday',
          open: '10:00',
          close: '21:00'
        },
        {
          day: 'Saturday',
          open: '10:00',
          close: '16:00'
        },
      ],
    }
  },
  methods: {
    schemaHours (day) {
      const dayAbbr = day.day.slice(0, 2)
      return `${dayAbbr} ${day.open}-${day.close}`
    },
    twelveHour (time) {
      const hour = parseInt(time.slice(0, 2))

      if (hour >= 12) {
        let twelveHour = time.replace(hour, hour - 12) + ' PM'
        return twelveHour
      } else {
        return time + ' AM'
      }
    }
  }
}
</script>
