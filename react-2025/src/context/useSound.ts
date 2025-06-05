import { createContext } from 'react'
import { Sound } from '@/utils/constants/enums'

type SoundContext = {
  playKeySuccess: () => void
  playKeyError: () => void
  changeKeySuccess: (sound: Sound, volume: number) => void
  changeKeyError: (sound: Sound, volume: number) => void
  updateVolume: (volume: number) => void
}

const SoundContext = createContext<SoundContext>({
  playKeySuccess: () => {},
  playKeyError: () => {},
  changeKeySuccess: () => {},
  changeKeyError: () => {},
  updateVolume: () => {},
})

export default SoundContext
