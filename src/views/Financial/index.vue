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
        <Line :data="data" :options="options" />
      </div>
    </div>
    <div class="mt-3 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Linha para Churn Rate ao longo do tempo.
      </h2>
      <div class="mt-3 flex flex-col max-w-[70em]">
        <Line :data="data" :options="options" />
      </div>
    </div>
    <div class="mt-3 flex flex-col">
      <h2 de Linha2 class="text-titleXS text-titleColor">
        Gráfico de Barras para Quantidade de Cobranças por Período de Tempo.
      </h2>
      <div class="mt-3 flex flex-col max-w-[70em]">
        <Bar :data="data" :options="options" />
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
  Legend
} from 'chart.js'
import { Line, Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

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
    return chartConfig
  }
}
</script>
