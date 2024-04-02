import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ImArrowUp,
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight,
} from 'react-icons/im'
import { GameInputs } from '@/types'
import { cn } from '@/utils/functions/utils'

type KeyTileProps = {
  keyInput: GameInputs
  hidden?: boolean
}

const KeyTile = ({ keyInput, hidden = false }: KeyTileProps) => {
  const inputCharacter =
    keyInput === GameInputs.UP ? (
      <ImArrowUp />
    ) : keyInput === GameInputs.DOWN ? (
      <ImArrowDown />
    ) : keyInput === GameInputs.LEFT ? (
      <ImArrowLeft />
    ) : keyInput === GameInputs.RIGHT ? (
      <ImArrowRight />
    ) : (
      keyInput
    )

  const animations = useMemo(() => {
    if (hidden) {
      return { scale: 1.1, opacity: 0 }
    }

    return {}
  }, [hidden])

  const transitions = useMemo(() => {
    if (hidden) {
      return { duration: 0.25 }
    }

    return { duration: 0 }
  }, [hidden])

  return (
    <motion.div
      animate={animations}
      transition={transitions}
      className={cn(
        'grid h-[100px] w-[100px] items-center justify-center rounded-full text-5xl font-bold capitalize text-l-keyText transition-opacity dark:text-d-keyText',
        {
          'bg-key1': GameInputs.UP === keyInput || GameInputs.W === keyInput,
          'bg-key2': GameInputs.LEFT === keyInput || GameInputs.A === keyInput,
          'bg-key3': GameInputs.DOWN === keyInput || GameInputs.S === keyInput,
          'bg-key4': GameInputs.RIGHT === keyInput || GameInputs.D === keyInput,
        }
      )}
    >
      {inputCharacter}
    </motion.div>
  )
}

export default KeyTile
