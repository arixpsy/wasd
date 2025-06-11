import type { GameInputs } from '@/utils/constants/enums'
import { useState } from 'react'

type Log = {
  key: GameInputs
  timePressed: number
  correct: boolean
}

const useKeyLog = () => {
  const [keylogs, setKeyLogs] = useState<Array<Log>>([])

  const clearLogs = () => {
    setKeyLogs([])
  }

  const addLog = (key: GameInputs, correct: boolean, timePressed: number) => {
    setKeyLogs((c) => [
      ...c,
      {
        key,
        correct,
        timePressed,
      },
    ])
  }

  return {
    addLog,
    clearLogs,
    keylogs,
  }
}

export default useKeyLog
