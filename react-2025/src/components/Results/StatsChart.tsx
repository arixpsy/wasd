import Chart from 'chart.js/auto'
import { useEffect, useRef, useState } from 'react'

type Log = {
  correct: boolean
  timePressed: number
  type?: 'arrow' | 'letter'
}

type StatsChartProps = {
  logs: Log[]
}

const StatsChart = ({ logs }: StatsChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!chartRef.current) return

    const textColor = isDark ? '#9ca3af' : '#4d4d4d'
    const errorColor = '#e58b88' // key1
    const inputColor = '#9dabdd' // key2

    const hasTypes = logs.some((l) => l.type)

    const myChart = new Chart(chartRef.current, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Errors',
            data: logs
              .filter((item) => !item.correct)
              .map((item) => ({
                x: item.timePressed / 1000,
                y: item.type ?? 'input',
              })),
            borderWidth: 4,
            backgroundColor: errorColor,
            borderColor: errorColor,
            pointStyle: 'crossRot' as const,
            pointRadius: 10,
          },
          {
            label: 'Key Input',
            data: logs.map((item) => ({
              x: item.timePressed / 1000,
              y: item.type ?? 'input',
            })),
            borderWidth: 3,
            backgroundColor: inputColor,
            borderColor: inputColor,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                const raw = context.raw as { x: number; y: string }
                const keyType =
                  raw.y === 'arrow'
                    ? 'Arrow'
                    : raw.y === 'letter'
                      ? 'Letter'
                      : 'Key'
                return `${keyType} input at ${raw.x.toFixed(2)}s`
              },
            },
          },
        },
        scales: {
          y: {
            type: 'category',
            ticks: {
              color: textColor,
              font: { family: "'Space Mono'" },
              callback: hasTypes
                ? (value) =>
                    value === 'arrow' ? 'Arrow Inputs' : 'Letter Inputs'
                : () => 'Key Inputs',
            },
          },
          x: {
            type: 'linear',
            ticks: {
              color: textColor,
              font: { family: "'Space Mono'" },
            },
          },
        },
      },
    })

    return () => myChart.destroy()
  }, [logs, isDark])

  return (
    <div className='relative h-[200px]'>
      <canvas ref={chartRef} />
    </div>
  )
}

export default StatsChart
