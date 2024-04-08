import { Sound, SoundSettings } from '@/types'

export const DEFAULT_SOUND_SETTINGS: SoundSettings = {
  volume: 0.6,
  keySuccessSound: Sound.OSU,
  keyErrorSound: '',
}

export const VOLUME_SETTINGS: Array<{ label: string; value: number }> = [
  {
    label: 'low',
    value: 0.3,
  },
  {
    label: 'medium',
    value: 0.6,
  },
  {
    label: 'max',
    value: 1,
  },
]

export const KEY_SUCCESS_SOUNDS: Array<{ label: string; value: Sound | '' }> = [
  {
    label: 'off',
    value: '',
  },
  {
    label: 'osu',
    value: Sound.OSU,
  },
  {
    label: 'meso',
    value: Sound.MESO,
  },
]

export const KEY_ERROR_SOUNDS: Array<{ label: string; value: Sound | '' }> = [
  {
    label: 'off',
    value: '',
  },
]
