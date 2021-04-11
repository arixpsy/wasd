import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2';

const ResultContainer = styled.div`
  width: 100%;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const OverallStats = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text-main);
  width: 150px;
`
const StatTitle = styled.h3`

`
const StatArrow = styled.div`
  margin-top: 1rem;
  border: solid 1rem transparent;
  border-top: solid 1rem ${props => (`var(--color-${props.color})`)};
`

const StatNumber = styled.h1`

`

const Result = ({ children, logs, stopWatch }) => {
  const [accuracy, setAccuracy] = useState(0)
  const [apm, setApm] = useState(0)
  const [errors, setErrors] = useState(0)

  useEffect(() => {
    // Find Accuracy
    const allLogs = [...logs.letterLog, ...logs.arrowLog]
    const correctInput = allLogs.filter(item => item.correct)
    setAccuracy(correctInput.length / allLogs.length * 100)

    // Find Number of Errors
    const incorrectInput = allLogs.filter(item => !item.correct)
    setErrors(incorrectInput.length)

    // Find APM
    const endTime = Math.max.apply(Math, allLogs.map(function(log) { return log.timePressed; }))
    setApm(60 / endTime * correctInput.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <ResultContainer>
        <OverallStats>
          <Stat>
            <StatTitle title="Total Time Taken in Seconds">Time Taken(s)</StatTitle>
            <StatArrow color="tertiary"/>
            <StatNumber>{ stopWatch.time.toFixed(2) }</StatNumber>
          </Stat>
          <Stat>
            <StatTitle title="Accurary">Accuracy</StatTitle>
            <StatArrow color="quaternary"/>
            <StatNumber>{ accuracy.toFixed(2) }%</StatNumber>
          </Stat>
          <Stat>
            <StatTitle title="Actions Per Minute">APM</StatTitle>
            <StatArrow color="secondary"/>
            <StatNumber>{ apm.toFixed(0) }</StatNumber>
          </Stat>
          <Stat>
            <StatTitle title="Total Number of Incorrect Inputs">Errors</StatTitle>
            <StatArrow color="primary"/>
            <StatNumber>{ errors }</StatNumber>
          </Stat>
        </OverallStats>
        <Line data={chartData}></Line>
        { children }
      </ResultContainer>
    </>
  )
}

export default Result