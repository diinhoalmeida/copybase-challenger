<template>
  <header>
    <div class="pl-5 pr-[60px] flex flex-row items-center justify-between py-5">
      <img src="../assets/icon-copybase.svg" alt="icon copybase" class="w-[250px]" />
      <CIcon
        :icon="cilHamburgerMenu"
        width="24"
        customClassName="icon"
        class="text-titleColor block lg:hidden"
        @click="toggleMenu"
      />
    </div>
  </header>
</template>
<script lang="ts">
import { cilHamburgerMenu } from '@coreui/icons'
import { CIcon } from '@coreui/icons-vue'
export default {
  name: 'HeaderPage',
  components: {
    CIcon
  },
  data() {
    return {
      cilHamburgerMenu
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu')
    }
  }
}
</script>
