import { PropsWithChildren, createContext, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { getSoundSettings } from '@/utils/functions/sound'
import { Sound } from '@/types'

type SoundContext = {
  playKeySuccess: () => void
  playKeyError: () => void
}

export const SoundContext = createContext<SoundContext>({
  playKeySuccess: () => {},
  playKeyError: () => {},
})

const SoundProvider = ({ children }: PropsWithChildren) => {
  const keySuccessSoundRef = useRef<Howl | null>(null)
  const keyErrorSoundRef = useRef<Howl | null>(null)

  const handlePlaySound = (type: 'success' | 'error') => {
    if (type === 'success') {
      keySuccessSoundRef.current?.play()
    } else {
      keyErrorSoundRef.current?.play()
    }
  }

  const initilizeSound = (
    type: 'success' | 'error',
    sound: Sound,
    volume: number
  ) => {
    if (type === 'success') {
      keySuccessSoundRef.current = new Howl({
        src: [sound],
        volume,
      })
    } else {
      keyErrorSoundRef.current = new Howl({
        src: [sound],
        volume,
      })
    }
  }

  useEffect(() => {
    const settings = getSoundSettings()

    if (settings.keySuccessSound) {
      initilizeSound('success', settings.keySuccessSound, settings.volume)
    }

    if (settings.keyErrorSound) {
      initilizeSound('error', settings.keyErrorSound, settings.volume)
    }
  }, [])

  return (
    <SoundContext.Provider
      value={{
        playKeySuccess: () => handlePlaySound('success'),
        playKeyError: () => handlePlaySound('error'),
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export default SoundProvider
