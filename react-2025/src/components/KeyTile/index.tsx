import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import {
  ImArrowUp,
  ImArrowDown,
  ImArrowLeft,
  ImArrowRight,
} from 'react-icons/im'
import { GameInputs, KeyTileViewState } from '@/utils/constants/enums'
import { cn } from '@/utils/functions/utils'

type KeyTileProps = {
  keyInput: GameInputs
  viewState?: KeyTileViewState
}

const KeyTile = ({
  keyInput,
  viewState = KeyTileViewState.DEFAULT,
}: KeyTileProps) => {
  const inputCharacter =
    viewState === KeyTileViewState.WRONG ? (
      <FaTimes />
    ) : keyInput === GameInputs.UP ? (
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
    if (viewState == KeyTileViewState.DEFAULT) return { opacity: 1, scale: 1 }

    return { scale: 1.1, opacity: 0 }
  }, [viewState])

  const transitions = useMemo(() => {
    if (viewState == KeyTileViewState.CORRECT) return { duration: 0.25 }

    if (viewState == KeyTileViewState.WRONG) return { duration: 0.5 }

    return { duration: 0 }
  }, [viewState])

  return (
    <motion.div
      animate={animations}
      transition={transitions}
      className={cn(
        'text-l-keyText dark:text-d-keyText grid h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full text-5xl font-bold capitalize transition-opacity',
        {
          'bg-key1': GameInputs.UP === keyInput || GameInputs.W === keyInput,
          'bg-key2': GameInputs.LEFT === keyInput || GameInputs.A === keyInput,
          'bg-key3': GameInputs.DOWN === keyInput || GameInputs.S === keyInput,
          'bg-key4': GameInputs.RIGHT === keyInput || GameInputs.D === keyInput,
        },
        {
          'bg-red-600 dark:bg-rose-500': viewState === KeyTileViewState.WRONG,
        }
      )}
    >
      {inputCharacter}
    </motion.div>
  )
}

export default KeyTile
