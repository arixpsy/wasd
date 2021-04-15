import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import styled from 'styled-components'

const ChartContainer = styled.div`

`

const StatsChart = ({ analysis }) => {
  const chartRef = useRef()

  useEffect(() => {
    const primary = getComputedStyle(document.body).getPropertyValue('--color-primary');
    const secondary = getComputedStyle(document.body).getPropertyValue('--color-secondary');
    const tertiary = getComputedStyle(document.body).getPropertyValue('--color-tertiary');
    const quaternary = getComputedStyle(document.body).getPropertyValue('--color-quaternary');
    console.log(analysis)
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: {
          labels: analysis.map(item => item.timePressed),
          datasets: [
            {
              label: 'Letter Input Progress(%)',
              data: analysis.map(item => item.letterProgress),
              borderWidth: 5,
              tension: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: quaternary
            },
            {
              label: 'Arrow Input Progress(%)',
              data: analysis.map(item => item.arrowProgress),
              borderWidth: 5,
              tension: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: secondary
            },
            {
              label: 'Total Effective Progress(%)',
              data: analysis.map(item => item.progress),
              borderWidth: 5,
              tension: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: tertiary
            }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        },
        scales: {
            y: {
              beginAtZero: true
            },
            x: {
              type: 'linear'
            }
        }
      }
    })
    return () => {
      myChart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analysis])

  return (
    <ChartContainer>
      <canvas ref={chartRef}></canvas>
    </ChartContainer>
  )
}

export default StatsChart