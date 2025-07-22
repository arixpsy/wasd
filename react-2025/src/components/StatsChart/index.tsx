import { useRef, useEffect, useContext } from 'react'
import Chart, { type TooltipItem } from 'chart.js/auto'
import DarkModeContext from '@/context/useDarkMode'
import type { Log } from '@/hooks/useKeyLog'
import { GameInputs } from '@/utils/constants/enums'

type StatsChartProps = {
  type: 'single' | 'split'
  data: Array<Log>
}

const StatsChart = ({ data, type }: StatsChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const { toggleCount } = useContext(DarkModeContext)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    const chartContext = chartRef.current?.getContext('2d')
    if (!chartContext) return

    const primary = getComputedStyle(document.body).getPropertyValue(
      '--color-key1'
    )
    const secondary = getComputedStyle(document.body).getPropertyValue(
      '--color-key2'
    )
    const textColor = getComputedStyle(document.body).getPropertyValue(
      isDarkMode ? '--color-d-text' : '--color-l-text'
    )

    const datasets = []

    if (type === 'single') {
      datasets.push(
        ...Object.values(GameInputs).map((key) => ({
          type: 'scatter',
          tension: 0,
          label: 'Key Input',
          data: data
            .filter((item) => key === item.key && item.correct)
            .map((item) => ({
              y: 'Input',
              x: item.timePressed / 1000,
              key: item.key,
            })),
          borderWidth: 3,
          backgroundColor: secondary,
          borderColor: secondary,
          stack: 'combined',
        }))
      )
    }

    if (type === 'split') {
    }

    const myChart = new Chart(chartContext, {
      data: {
        // datasets: [
        //   {
        //     type: 'scatter',
        //     label: 'Errors',
        //     data: data
        //       .filter((item) => !item.correct)
        //       .map((item) => ({
        //         x: item.timePressed / 1000,
        //         y: item.type ? item.type : 'Input',
        //         key: item.key,
        //       })),
        //     borderWidth: 4,
        //     tension: 0,
        //     backgroundColor: primary,
        //     borderColor: primary,
        //     pointStyle: 'crossRot',
        //     stack: 'combined',
        //   },
        //   {
        //     type: 'scatter',
        //     tension: 0,
        //     label: 'Key Input',
        //     data: data.map((item) => ({
        //       y: item.type ? item.type : 'Input',
        //       x: item.timePressed / 1000,
        //       key: item.key,
        //     })),
        //     borderWidth: 3,
        //     backgroundColor: secondary,
        //     borderColor: secondary,
        //     stack: 'combined',
        //   },
        // ],
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (
                context: TooltipItem<'scatter'> & {
                  raw: { x: number; key: string; y: string }
                }
              ) {
                return `${context.raw.key} key at ${context.raw.x.toFixed(2)} seconds`
              },
            },
          },
        },
        scales: {
          y: {
            title: {
              padding: 20,
              color: textColor,
              font: {
                family: 'Space Mono',
              },
            },
            type: 'category',
            labels: ['', 'Input', ''],
            ticks: {
              color: textColor,
              font: {
                family: 'Space Mono',
              },
              align: 'center',
              padding: 0,
              // callback: function (index, value, values) {
              //   return index === 0 ? 'Arrow Inputs' : 'Letter Inputs'
              // },
            },
          },
          x: {
            type: 'linear',
            ticks: {
              color: textColor,
              font: {
                family: 'Space Mono',
              },
            },
          },
        },
      },
    })
    return () => {
      myChart.destroy()
    }
  }, [data, toggleCount])

  return (
    <div className='relative h-[200px] w-full'>
      <canvas id='myChart' ref={chartRef}></canvas>
    </div>
  )
}

export default StatsChart
