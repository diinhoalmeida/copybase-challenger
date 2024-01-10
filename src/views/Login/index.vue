<template>
  <section class="flex items-center justify-center">
    <div class="flex flex-col gap-20 mt-32">
      <img src="../../assets/icon-copybase.svg" alt="copybase logo" class="w-80" />
      <form>
        <div class="border-t-[1px] border-b-[1px] border-fontNavBarColor py-6 border-opacity-50">
          <label for="email" class="block mb-2 text-sm font-medium text-titleColor dark:text-white"
            >ENDEREÇO DE EMAIL</label
          >
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@email.com"
            required
          />
        </div>
        <div class="py-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-titleColor dark:text-white"
            >SENHA</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="* * * * * *"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-cardColor_green rounded-lg text-buttonColor text-buttonG w-full py-3 hover:bg-opacity-100 bg-opacity-70 transition-all ease-in-out"
        >
          Entrar
        </button>
      </form>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'LoginPage'
}
</script>
