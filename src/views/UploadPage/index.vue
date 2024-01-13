<template>
  <header>
    <div class="flex flex-col">
      <h1 class="text-titleL text-titleColor">Upload de Arquivo</h1>
      <div class="w-full border-fontNavBarColor border border-opacity-70" />
    </div>
    <div class="mt-5 flex flex-col gap-10">
      <div class="flex flex-col">
        <h2 class="text-titleColor text-textL">
          Olá, esta é a tela de upload de arquivo, clique no botão "Selecionar Arquivo", envie um
          arquivo de formato xlsx
        </h2>
        <h3 class="text-titleColor text-textM">
          Os dados do arquivo xlsx devem seguir o seguinte formato
        </h3>
      </div>
      <img src="../../assets/data-example.png" alt="data example" />
      <div class="flex flex-row items-center gap-4">
        <div>
          <input
            type="file"
            @change="handleFileChange"
            ref="fileInput"
            style="display: none"
            multiple="false"
          />
          <button
            @click="openFileSelector"
            class="bg-cardColor_green w-max rounded-lg text-buttonColor text-buttonG py-3 px-10 hover:bg-opacity-100 bg-opacity-70 transition-all ease-in-out"
          >
            Selecionar Arquivo
          </button>
        </div>
        <button
          @click="processFile"
          class="bg-cardColor_green w-max rounded-lg text-buttonColor text-buttonG py-3 px-10 hover:bg-opacity-100 bg-opacity-70 transition-all ease-in-out"
          :class="{ 'bg-opacity-20 hover:bg-opacity-20': !selectedFile }"
          :disabled="!selectedFile"
        >
          Enviar para análise
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import api from '../../config/axios-instance'

export default {
  name: 'UploadPage',
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    async processFile() {
      try {
        if (!this.selectedFile) {
          alert('Nenhum arquivo selecionado.')
          return
        }

        const formData = new FormData()
        formData.append('files', this.selectedFile, 'modelo-teste-full-stack.xlsx')
        const response = await api.post('/sessions', formData)

        alert('Upload realizado')
        location.reload()
      } catch (error) {
        alert('Erro no envio do arquivo para análise', error)
      }
    },

    openFileSelector() {
      if (this.$refs.fileInput) {
        this.$refs.fileInput.click()
      }
    },

    handleFileChange(event: Event) {
      const file = event.target.files[0]

      if (file) {
        this.selectedFile = file
      }
    }
  }
}
</script>
