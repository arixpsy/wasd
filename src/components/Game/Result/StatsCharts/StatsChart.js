import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import styled from 'styled-components'

const ChartContainer = styled.div`

`

const StatsChart = () => {
  const chartRef = useRef()

  useEffect(() => {
    const myChart = new Chart(chartRef.current, {
      type: 'line',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 5,
              tension: 0.4
          },
          {
            label: '# of Votes',
            data: [2, 3, 5, 53, 42, 43],
            stack: 'combined',
            type: 'scatter'
        }
        
        ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
    })
    return () => {
      myChart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ChartContainer>
      <canvas ref={chartRef}></canvas>
    </ChartContainer>
  )
}

export default StatsChart