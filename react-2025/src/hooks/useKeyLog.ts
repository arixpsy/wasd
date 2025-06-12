import type { GameInputs } from '@/utils/constants/enums'
import { useState } from 'react'

type Log = {
  correct: boolean
  key: GameInputs
  timePressed: number
  type?: 'arrow' | 'letter'
}

const useKeyLog = () => {
  const [keylogs, setKeyLogs] = useState<Array<Log>>([])

  const clearLogs = () => {
    setKeyLogs([])
  }

  const addLog = (
    key: GameInputs,
    correct: boolean,
    timePressed: number,
    type?: 'arrow' | 'letter'
  ) => {
    setKeyLogs((c) => [
      ...c,
      {
        key,
        correct,
        timePressed,
        type,
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
