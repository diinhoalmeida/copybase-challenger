<template>
  <header>
    <div class="flex flex-col">
      <div class="flex justify-between w-full pr-5">
        <h1 class="text-titleL text-titleColor">Financeiro</h1>
        <select
          v-model="anoDesejado"
          @change="atualizarGrafico"
          class="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
        >
          <option
            v-for="ano in anosDisponiveis"
            :key="ano"
            :value="ano"
            class="hover:bg-blue-500 hover:text-white"
          >
            {{ ano }}
          </option>
        </select>
      </div>
      <div class="w-full border-fontNavBarColor border border-opacity-70" />
    </div>
    <div class="mt-3 flex flex-col">
      <h2 class="text-titleXS text-titleColor">Gráfico de Linha para Receita Recorrente Mensal</h2>
      <div class="mt-3 flex flex-col max-w-[50em]">
        <Line :data="data" :options="options" />
      </div>
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
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  BarElement,
  Legend
)
import { Line } from 'vue-chartjs'
import api from '@/config/axios-instance'

export default {
  name: 'FinancialPage',
  components: {
    Line
  },
  methods: {
    async obterAnosDisponiveis() {
      this.anosDisponiveis = Object.keys(this.mrr)
    },
    async atualizarGrafico() {
      const dadosFiltrados = this.mrr[this.anoDesejado]
      const arrayDados = Object.values(dadosFiltrados)

      this.data = {
        labels: this.labels,
        datasets: [
          {
            label: 'Ativos',
            backgroundColor: '#BDFE68',
            data: arrayDados
          }
        ]
      }
    }
  },
  data() {
    return {
      data: { labels: [], datasets: [] },
      mrr: [],
      options: { responsive: true, maintainAspectRatio: true },
      labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      anoDesejado: '2022',
      anosDisponiveis: []
    }
  },
  async mounted() {
    try {
      const response = await api.get('/getfiledata')
      this.mrr = response.data.data.mrr

      // Obter anos disponíveis e definir o valor padrão
      await this.obterAnosDisponiveis()
      await this.atualizarGrafico()
    } catch (error) {
      console.error('Erro ao obter dados da API', error)
    }
  }
}
</script>
