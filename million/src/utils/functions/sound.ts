import { SoundSettings } from '@/types'
import { DEFAULT_SOUND_SETTINGS } from '@/utils/constants/sound'

export const getSoundSettings = (): SoundSettings => {
  if (!localStorage.sound) {
    localStorage.sound = JSON.stringify(DEFAULT_SOUND_SETTINGS)
    return DEFAULT_SOUND_SETTINGS
  }

  const parsedSettings = JSON.parse(localStorage.sound)
  parsedSettings.volume = parseFloat(parsedSettings.volume)

  return parsedSettings
}
