<template>
  <HeaderPage @toggleMenu="toggleMenu" />
  <section class="flex flex-row">
    <aside>
      <NavBar :showMenu="showMenu" @toggleMenu="toggleMenu" />
    </aside>
    <main class="p-5 w-full bg-buttonColor">
      <section><router-view /></section>
    </main>
  </section>
</template>
<script lang="ts">
import NavBar from '../components/NavBar.vue'
import HeaderPage from '../components/HeaderPage.vue'

export default {
  name: 'HomePageLayout',
  components: {
    NavBar,
    HeaderPage
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
