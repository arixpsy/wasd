import { GameMode } from '@/utils/constants/enums'

export const gameModeLabel: Record<GameMode, string> = {
  [GameMode.SINGLE_SEQUENCES]: 'Default',
  [GameMode.SPLIT_SEQUENCE]: 'Split',
  [GameMode.EIGHT_SPLIT]: '8 Split',
} as const
