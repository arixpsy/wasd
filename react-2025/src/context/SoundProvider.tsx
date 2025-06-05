import { type PropsWithChildren, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import SoundContext from '@/context/useSound'
import { Sound } from '@/utils/constants/enums'
import { getSoundSettings } from '@/utils/functions/sound'

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
    let newSound = null

    if (sound !== '') {
      newSound = new Howl({
        src: [sound],
        volume,
      })
    }

    if (type === 'success') {
      keySuccessSoundRef.current = newSound
    } else {
      keyErrorSoundRef.current = newSound
    }
  }

  const updateVolume = (volume: number) => {
    if (keySuccessSoundRef.current) keySuccessSoundRef.current.volume(volume)
    if (keyErrorSoundRef.current) keyErrorSoundRef.current.volume(volume)
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
        changeKeySuccess: (sound: Sound, volume: number) =>
          initilizeSound('success', sound, volume),
        changeKeyError: (sound: Sound, volume: number) =>
          initilizeSound('error', sound, volume),
        updateVolume,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

export default SoundProvider
