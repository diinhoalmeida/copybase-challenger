<template>
  <header>
    <div class="flex flex-col">
      <h1 class="text-titleL text-titleColor">Status e Engajamento</h1>
      <div class="w-full border-fontNavBarColor border border-opacity-70" />
    </div>
    <div class="mt-3 flex flex-col">
      <h2 class="text-titleXS text-titleColor">Gráfico de Torta para Status de Assinantes</h2>
      <div class="mt-3 flex flex-col max-w-[30em]">
        <Pie :data="data" :options="options" />
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Linha para Churn Rate ao longo do tempo.
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <!-- <Line :data="lineChartData" :options="options" /> -->
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Barras para Quantidade de Cobranças por Período de Tempo.
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <!-- <Bar :data="lineChartData" :options="options" /> -->
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
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Line, Bar, Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'
import api from '@/config/axios-instance'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend,
  ArcElement
)

export default {
  name: 'SocialStats',
  components: {
    Line,
    Bar,
    Pie
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true
      },
      data: {
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
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 100, 40]
          }
        ]
      },
      statusCounts: []
    }
  },
  async mounted() {
    await api
      .get('/getfiledata')
      .then((response) => {
        this.statusCounts = response.data.data.statusCounts
        const mappedStatusCounts = {
          Ativo: this.statusCounts.active,
          Atrasado: this.statusCounts.delayed,
          Cancelado: this.statusCounts.canceled,
          'Trial cancelado': this.statusCounts.trialCanceled,
          Upgrade: this.statusCounts.upgrade
        }

        // Crie um array de dados com base nos rótulos mapeados
        this.data = {
          labels: Object.keys(mappedStatusCounts),
          datasets: [
            {
              label: 'Status',
              backgroundColor: ['#f87979', '#ffcc66', '#999999', '#66ccff', '#cc99ff'],
              data: Object.values(mappedStatusCounts)
            }
          ]
        }
      })
      .catch((error) => {
        console.error('Erro ao obter dados da API', error)
      })
  }
}
</script>
