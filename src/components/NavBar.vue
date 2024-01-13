<template>
  <nav>
    <div
      :class="[
        { hidden: !showMenu },
        { absolute: showMenu },
        { 'bg-buttonColor': showMenu },
        { 'w-screen': showMenu },
        'lg:flex',
        'px-5',
        'w-max',
        'h-[100vh]',
        'flex-col',
        'pt-5',
        'text-titleColor'
      ]"
    >
      <ul class="flex flex-col gap-5">
        <li>
          <router-link to="/uploadpage">
            <div
              @click="toggleStyles('upload')"
              :class="{
                'bg-buttonColor shadow-md ': activeTab === 'upload',
                'border cursor-pointer border-background hover:border hover:border-buttonColor shadow-md py-4 px-3 transition-all ease-in-out':
                  activeTab !== 'upload'
              }"
              class="flex flex-row items-center gap-2 rounded-lg w-max lg:w-full py-4 px-6 lg:py-4 lg:px-3"
            >
              <CIcon
                :icon="cilArrowThickToTop"
                width="24"
                customClassName="icon"
                class="text-titleColor"
              />
              Tela de Upload
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/socialstats">
            <div
              @click="toggleStyles('stats')"
              :class="{
                'bg-buttonColor shadow-md py-4 px-3': activeTab === 'stats',
                'border cursor-pointer border-background hover:border hover:border-buttonColor shadow-md py-4 px-3 transition-all ease-in-out':
                  activeTab !== 'stats'
              }"
              class="flex flex-row items-center gap-2 rounded-lg w-max lg:w-full py-4 px-6 lg:py-4 lg:px-3"
            >
              <CIcon :icon="cilGroup" width="24" customClassName="icon" class="text-titleColor" />
              Status e Engajamento
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/financial">
            <div
              @click="toggleStyles('financial')"
              :class="{
                'bg-buttonColor shadow-md py-4 px-3': activeTab === 'financial',
                'border cursor-pointer border-background hover:border hover:border-buttonColor shadow-md py-4 px-3 transition-all ease-in-out':
                  activeTab !== 'financial'
              }"
              class="flex flex-row items-center gap-2 rounded-lg w-max lg:w-full py-4 px-6 lg:py-4 lg:px-3"
            >
              <CIcon :icon="cilDollar" width="24" customClassName="icon" class="text-titleColor" />
              Financeiro
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { CIcon } from '@coreui/icons-vue'
import { cilArrowThickToTop, cilGroup, cilDollar } from '@coreui/icons'

export default {
  name: 'NavBar',
  components: {
    CIcon
  },
  props: {
    showMenu: Boolean
  },
  data() {
    return {
      cilArrowThickToTop,
      cilGroup,
      activeTab: 'upload',
      cilDollar
    }
  },
  methods: {
    toggleStyles(tab: any) {
      this.toggleMenu()
      this.activeTab = tab
    },
    toggleMenu() {
      this.$emit('toggleMenu')
    }
  }
}
</script>
