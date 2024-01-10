<template>
  <nav>
    <div class="px-5 w-max h-[100vh] flex flex-col pt-5 text-titleColor">
      <ul class="flex flex-col gap-5">
        <li>
          <a href="/financial">
            <div
              class="flex flex-row items-center gap-2 rounded-lg border cursor-pointer border-background hover:border hover:border-buttonColor shadow-md py-4 px-3 transition-all ease-in-out"
            >
              <CIcon :icon="cilDollar" width="24" customClassName="icon" class="text-titleColor" />
              <p>Financeiro</p>
            </div></a
          >
        </li>
        <li>
          <div
            class="flex flex-row items-center gap-2 rounded-lg bg-buttonColor shadow-md py-4 px-3"
          >
            <CIcon :icon="cilGroup" width="24" customClassName="icon" class="text-titleColor" />
            <a>Status e Engajamento</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { CIcon } from '@coreui/icons-vue'
import { cilDollar, cilGroup } from '@coreui/icons'

export default {
  name: 'NavBar',
  components: {
    CIcon
  },
  data() {
    return {
      cilDollar,
      cilGroup
    }
  }
}
</script>
