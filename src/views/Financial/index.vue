<template>
  <header>
    <div class="flex flex-col">
      <h1 class="text-titleL text-titleColor">Financeiro</h1>
      <div class="w-full border-fontNavBarColor border border-opacity-70" />
    </div>
    <div class="mt-3 flex flex-col">
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para MRR ao longo do tempo (meses)
      </h2>
      <div class="mt-3 flex flex-col max-w-[70em]">
        <Line :data="lineChartData" :options="options" />
      </div>
    </div>
    <div class="mt-3 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Linha para Churn Rate ao longo do tempo.
      </h2>
      <div class="mt-3 flex flex-col max-w-[70em]">
        <Line :data="lineChartData" :options="options" />
      </div>
    </div>
    <div class="mt-3 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Barras para Quantidade de Cobranças por Período de Tempo.
      </h2>
      <div class="mt-3 flex flex-col max-w-[70em]">
        <Bar :data="barChartData" :options="options" />
      </div>
    </div>
    <div class="mt-5 flex flex-col">
      <input
        type="file"
        @change="handleFileChange"
        ref="fileInput"
        style="display: none"
        multiple="false"
      />
      <button @click="openFileSelector">Selecionar Arquivo</button>
    </div>
    <div class="mt-3 flex flex-col">
      <button @click="processFile">Enviar Arquivo</button>
    </div>
  </header>
</template>
<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line, Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import api from '../../config/axios-instance'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend
)

export default {
  name: 'FinancialPage',
  components: {
    Line,
    Bar
  },
  data() {
    return {
      lineChartData: chartConfig.data,
      barChartData: chartConfig.data,
      selectedFile: null,
      options: {
        responsive: true,
        maintainAspectRatio: true
      },
      csvData: [],
      xlsxData: []
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
        formData.append('files', this.selectedFile)

        alert('Upload realizado')

        const response = await api.post('/sessions', formData)

        console.log('Resposta do backend:', response.data)
      } catch (error) {
        console.error('Erro no envio do arquivo para análise', error)
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
