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
}

const KeyTile = ({ keyInput }: KeyTileProps) => {
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

  return (
    <div
      className={cn(
        'text-l-keyText dark:text-d-keyText grid h-[100px] w-[100px] items-center justify-center rounded-full text-5xl font-bold capitalize',
        {
          'bg-key1': GameInputs.UP === keyInput || GameInputs.W === keyInput,
          'bg-key2': GameInputs.LEFT === keyInput || GameInputs.A === keyInput,
          'bg-key3': GameInputs.DOWN === keyInput || GameInputs.S === keyInput,
          'bg-key4': GameInputs.RIGHT === keyInput || GameInputs.D === keyInput,
        }
      )}
    >
      {inputCharacter}
    </div>
  )
}

export default KeyTile
