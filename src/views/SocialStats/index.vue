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
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para status Ativo ao longo dos meses
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <Line :data="dataCountStatusActive" :options="options" />
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para status Cancelado ao longo dos meses
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <Line :data="dataCountStatusCanceled" :options="options" />
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para status Trios Cancelado ao longo dos meses
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <Line :data="dataCountStatusTrialCanceled" :options="options" />
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para status Upgrade ao longo dos meses
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <Line :data="dataCountStatusUpgrade" :options="options" />
      </div>
    </div>
    <div class="mt-10 flex flex-col">
      <h2 class="text-titleXS text-titleColor">
        Gráfico de Linha para status Atrasado ao longo dos meses
      </h2>
      <div class="flex flex-col max-w-[50em]">
        <Line :data="dataCountStatusDelayed" :options="options" />
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
import { Line, Bar, Pie } from 'vue-chartjs'
import api from '@/config/axios-instance'

export default {
  name: 'SocialStats',
  components: { Line, Bar, Pie },
  data() {
    return {
      options: { responsive: true, maintainAspectRatio: true },
      data: { labels: [], datasets: [] },
      dataCountStatusActive: { labels: [], datasets: [] },
      dataCountStatusCanceled: { labels: [], datasets: [] },
      dataCountStatusDelayed: { labels: [], datasets: [] },
      dataCountStatusUpgrade: { labels: [], datasets: [] },
      dataCountStatusTrialCanceled: { labels: [], datasets: [] },
      statusCounts: [],
      statusByMonths: [],
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
      ]
    }
  },
  async mounted() {
    try {
      const response = await api.get('/getfiledata')
      this.statusCounts = response.data.data.statusCounts
      this.statusByMonths = response.data.data.statusByMonths

      const activeArray = this.getStatusArray('active')
      const canceledArray = this.getStatusArray('canceled')
      const delayedArray = this.getStatusArray('delayed')
      const upgradeArray = this.getStatusArray('upgrade')
      const trialCanceledArray = this.getStatusArray('trialCanceled')

      this.dataCountStatusActive = {
        labels: this.labels,
        datasets: [
          {
            label: 'Ativos',
            backgroundColor: '#BDFE68',
            data: activeArray
          }
        ]
      }
      this.dataCountStatusCanceled = {
        labels: this.labels,
        datasets: [
          {
            label: 'Cancelados',
            backgroundColor: '#f10c49',
            data: canceledArray
          }
        ]
      }
      this.dataCountStatusDelayed = {
        labels: this.labels,
        datasets: [
          {
            label: 'Atrasados',
            backgroundColor: '#f6d86b',
            data: delayedArray
          }
        ]
      }
      this.dataCountStatusUpgrade = {
        labels: this.labels,
        datasets: [
          {
            label: 'Upgrade',
            backgroundColor: '#339194',
            data: upgradeArray
          }
        ]
      }
      this.dataCountStatusTrialCanceled = {
        labels: this.labels,
        datasets: [
          {
            label: 'Trials Cancelados',
            backgroundColor: '#a70267',
            data: trialCanceledArray
          }
        ]
      }

      const mappedStatusCounts = {
        Ativo: this.statusCounts.active,
        Atrasado: this.statusCounts.delayed,
        Cancelado: this.statusCounts.canceled,
        'Trial cancelado': this.statusCounts.trialCanceled,
        Upgrade: this.statusCounts.upgrade
      }

      this.data = {
        labels: Object.keys(mappedStatusCounts),
        datasets: [
          {
            label: 'Status',
            backgroundColor: ['#BDFE68', '#f6d86b', '#f10c49', '#a70267', '#339194'],
            data: Object.values(mappedStatusCounts)
          }
        ]
      }
    } catch (error) {
      console.error('Erro ao obter dados da API', error)
    }
  },
  methods: {
    getStatusArray(statusKey) {
      return Object.values(this.statusByMonths).map((monthData) => monthData[statusKey] || 0)
    }
  }
}
</script>
