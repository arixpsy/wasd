import { useContext, useEffect, useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import SettingsOption from '@/components/SettingsOption'
import SettingsOptionButton from '@/components/SettingsOptionButton'
import {
  KEY_ERROR_SOUNDS,
  KEY_SUCCESS_SOUNDS,
  VOLUME_SETTINGS,
} from '@/utils/constants/sound'
import { getSoundSettings, saveSoundSettings } from '@/utils/functions/sound'
import { SoundContext } from '@/context/useSound'
import { Sound, SoundSettings } from '@/types'

const Settings = () => {
  const [soundSettings, setSoundSettings] =
    useState<SoundSettings>(getSoundSettings())
  const {
    changeKeyError,
    changeKeySuccess,
    playKeySuccess,
    playKeyError,
    updateVolume,
  } = useContext(SoundContext)

  const handleSetVolume = (volume: number) => {
    setSoundSettings((s) => ({ ...s, volume }))
    updateVolume(volume)
  }

  const handleSetSuccessSound = (sound: Sound) => {
    setSoundSettings((s) => ({ ...s, keySuccessSound: sound }))
    changeKeySuccess(sound, soundSettings.volume)
    playKeySuccess()
  }

  const handleSetErrorSound = (sound: Sound) => {
    setSoundSettings((s) => ({ ...s, keyErrorSound: sound }))
    changeKeyError(sound, soundSettings.volume)
    playKeyError()
  }

  useEffect(() => {
    saveSoundSettings(soundSettings)
  }, [soundSettings])

  return (
    <div className='mb-3 flex flex-col gap-6 overflow-auto pb-6'>
      <h1 className='text-3xl font-bold'>Sound</h1>

      <SettingsOption
        icon={FaVolumeDown}
        title='Sound volume'
        description='Change the volume of sound effects'
      >
        {VOLUME_SETTINGS.map(({ label, value }) => (
          <SettingsOptionButton
            key={`volume setting ${label}`}
            active={value === soundSettings.volume}
            onClick={() => handleSetVolume(value)}
          >
            {label}
          </SettingsOptionButton>
        ))}
      </SettingsOption>

      <SettingsOption
        icon={FaVolumeUp}
        title='Play sound on success'
        description='Plays a short sound when you press a key correctly'
      >
        {KEY_SUCCESS_SOUNDS.map(({ label, value }) => (
          <SettingsOptionButton
            key={`success sound ${label}`}
            active={value === soundSettings.keySuccessSound}
            onClick={() => handleSetSuccessSound(value)}
          >
            {label}
          </SettingsOptionButton>
        ))}
      </SettingsOption>

      <SettingsOption
        icon={FaVolumeMute}
        title='Play sound on error'
        description='Plays a short sound when you press a key incorrectly'
      >
        {KEY_ERROR_SOUNDS.map(({ label, value }) => (
          <SettingsOptionButton
            key={`error sound ${label}`}
            active={value === soundSettings.keyErrorSound}
            onClick={() => handleSetErrorSound(value)}
          >
            {label}
          </SettingsOptionButton>
        ))}
      </SettingsOption>
    </div>
  )
}

export const Route = createLazyFileRoute('/settings')({
  component: Settings,
})
