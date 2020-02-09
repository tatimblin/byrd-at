<template>
  <div id="app">
    <header class="Header">
      <div class="Header-container">
        <div class="Header-item">
          <router-link to="/">
            <img src="./assets/logo.webp" alt="BYRD AT Homepage" class="Header-logo">
          </router-link>
        </div>
        <nav class="Header-nav">
          <ul class="Header-list">
            <li class="Header-listItem" v-for="link in headerLinks" :key="link.label">
              <router-link :to="link.url" class="Header-link" v-if="link.app">
                {{ link.label }}
              </router-link>
              <a :href="link.url" class="Header-link" v-else>
                {{ link.label}}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view/>

    <footer class="Footer">
      <div class="Footer-container">
        <div class="Footer-item">
          <img src="./assets/logo.webp" alt="BYRD AT" class="Footer-logo">
        </div>
        <div class="Footer-item">
          <ul class="Footer-list">
            <li class="Footer-listItem" v-for="link in links" :key="link.label">
              <router-link :to="link.url" class="Footer-link" v-if="link.app">
                {{ link.label }}
              </router-link>
              <a :href="link.url" class="Footer-link" v-else>
                {{ link.label}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span class="Footer-container">Copyright © 2020 Byrd Assistive Technologies. All Rights Reserved.</span>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'Home',
          url: '/',
          app: true,
        },
        {
          label: 'About',
          url: { name: 'Home', hash: '#about' },
          header: true,
          app: true
        },
        {
          label: 'Manufacturers',
          url: '/manufacturers',
          header: true,
          app: true,
        },
        {
          label: 'Resources',
          url: '/resources',
          header: true,
          app: true,
        },
        {
          label: 'Contact',
          url: '/contact',
          header: true,
          app: true,
        },
      ]
    }
  },
  computed: {
    headerLinks () {
      return this.links.filter(number => number.header === true)
    }
  }
}
</script>

<style lang="scss">
.Header
{
  padding-top: unit(25);
  padding-bottom: unit(25);

  &-container
  {
    @include l-container;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo
  {
    height: 70px;
  }

  &-list
  {
    display: flex;
  }

  &-listItem
  {
    &:not(:last-child)
    {
      margin-right: unit(50);
    }
  }
}

.Footer
{
  &-container
  {
    @include l-container;

    @include query (sm)
    {
      display: flex;
    }
  }
}
</style>
