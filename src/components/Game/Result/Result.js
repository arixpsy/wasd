import React from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';

const ChartContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const Result = ({ children, logs, stopWatch }) => {
  const chartData = {
    labels: ['1','2','3','4','5','6','7'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }],
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }
  return (
    <>
      <h1>My Results</h1>
      <ChartContainer>
        <Line data={chartData}></Line>
        { children }
      </ChartContainer>
    </>
  )
}

export default Result