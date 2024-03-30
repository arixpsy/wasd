import { useEffect, useState } from 'react'

const useStopwatch = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const formattedTime = (elapsedTime / 1000).toFixed(2)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => setElapsedTime(Date.now() - startTime), 10)
    }

    return () => clearInterval(interval)
  }, [isRunning, startTime])

  const start = () => {
    setIsRunning(true)
    setStartTime(Date.now())
  }

  const stop = () => {
    setIsRunning(false)
  }

  const reset = () => {
    setIsRunning(false)
    setStartTime(0)
    setElapsedTime(0)
  }

  return {
    start,
    stop,
    reset,
    time: formattedTime,
  }
}

export default useStopwatch
