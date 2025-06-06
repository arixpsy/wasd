type ResultsProps = {
  logs: Array<{
    correct: boolean
    timePressed: number
  }>
}

const Results = ({ logs }: ResultsProps) => {
  // Find Accuracy
  const correctInput = logs.filter((item) => item.correct)
  const accuracy = (correctInput.length / logs.length) * 100
  // Find Number of Errors
  const incorrectInput = logs.filter((item) => !item.correct)
  const errors = incorrectInput.length
  // Find APM
  const endTime = Math.max(...logs.map((i) => i.timePressed))
  const apm = (60 / (endTime / 1000)) * correctInput.length

  return (
    <div className='flex justify-around'>
      <div className='flex w-[150px] flex-col items-center'>
        <p title='Total Time Taken in Seconds'>Time Taken(s)</p>
        <div className='border-t-key1 mt-4 border-16 border-transparent' />
        <p>{(endTime / 1000).toFixed(2)}</p>
      </div>

      <div className='flex w-[150px] flex-col items-center'>
        <p title='Accuracy'>Accuracy</p>
        <div className='border-t-key2 mt-4 border-16 border-transparent' />
        <p>{accuracy.toFixed(2)}%</p>
      </div>

      <div className='flex w-[150px] flex-col items-center'>
        <p title='Actions Per Minute'>APM</p>
        <div className='border-t-key3 mt-4 border-16 border-transparent' />
        <p>{apm.toFixed(0)}</p>
      </div>

      <div className='flex w-[150px] flex-col items-center'>
        <p title='Total Number of Incorrect Inputs'>Errors</p>
        <div className='border-t-key4 mt-4 border-16 border-transparent' />
        <p>{errors}</p>
      </div>
    </div>
  )
}

export default Results
