import { useState, useEffect } from 'react'

const useStopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
      let interval;
      if (isRunning) {
        interval = setInterval(
          () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.01),
          10
        );
      }
      return () => clearInterval(interval);
    },[isRunning]);

    return {
      elapsedTime: elapsedTime,
      resetStopWatch: () => setElapsedTime(0),
      startStopWatch: () => setIsRunning(true),
      stopStopWatch: () => setIsRunning(false),
      isRunning: isRunning
    }
}

export default useStopWatch