<template>
  <header>
    <div class="px-5 flex flex-row items-center justify-between py-5">
      <img src="../assets/icon-copybase.svg" alt="icon copybase" class="w-[250px]" />
      <div class="flex flex-row items-center">
        <CIcon :icon="cilUser" width="48" customClassName="icon" class="text-titleColor" />
        <CIcon :icon="cilAccountLogout" width="48" customClassName="icon" class="text-titleColor" />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { cilUser, cilAccountLogout } from '@coreui/icons'
import { CIcon } from '@coreui/icons-vue'
export default {
  name: 'HeaderPage',
  components: {
    CIcon
  },
  data() {
    return {
      cilUser,
      cilAccountLogout
    }
  }
}
</script>
