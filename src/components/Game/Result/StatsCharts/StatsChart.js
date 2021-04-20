import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const ChartContainer = styled.div`
  height: 200px !important;
  position: relative;
`

const StatsChart = ({ analysis }) => {
  const chartRef = useRef()
  const triggerDarkMode = useSelector(state => state.triggerDarkMode)

  useEffect(() => {
    const primary = getComputedStyle(document.body).getPropertyValue('--color-primary');
    const secondary = getComputedStyle(document.body).getPropertyValue('--color-secondary');
    const textColor = getComputedStyle(document.body).getPropertyValue('--color-text-main');

    const myChart = new Chart(chartRef.current.getContext('2d'), {
      type: 'scatter',
      data: {
          datasets: [
            {
              label: 'Errors',
              data:
              analysis.filter(item => !item.correct).map((item) => {
                const x = item.timePressed
                const y = item.type
                return {
                  x: x,
                  y: y
                }
              }),
              borderWidth: 4,
              tension: 0,
              backgroundColor: primary,
              borderColor: primary,
              pointStyle: 'crossRot',
              radius: 10,
              stack: 'combined',
              type: 'scatter'
            },
            {
              label: 'Key Input',
              data: analysis.map(item => ({y: item.type, x: item.timePressed})),
              borderWidth: 3,
              tension: 0,
              backgroundColor: secondary,
              borderColor: secondary,
              stack: 'combined'
            }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.raw.y.charAt(0).toUpperCase() + context.raw.y.slice(1)} key at ${context.raw.x.toFixed(2)} seconds`
              }
            }
          }
        },
        scales: {
            y: {
              title: {
                padding: 20,
                color: textColor,
                font: {
                  family: "'Space Mono'"
                }
              },
              type: 'category',
              ticks: {
                color: textColor,
                font: {
                  family: "'Space Mono'"
                },
                align: 'center',
                padding: 0,
                callback: function(index, value, values) {
                  return index === 0 ? 'Arrow Inputs' : 'Letter Inputs'
                }
              }
            },
            x: {
              type: 'linear',
              ticks: {
                color: textColor,
                font: {
                  family: "'Space Mono'"
                }
              }
            }
        }
      }
    })
    return () => {
      myChart.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analysis, triggerDarkMode])

  return (
    <ChartContainer>
      <canvas id="myChart" ref={chartRef}></canvas>
    </ChartContainer>
  )
}

export default StatsChart