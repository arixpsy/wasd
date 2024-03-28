import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classNames: Array<ClassValue>) =>
  twMerge(clsx(classNames))

export const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b))
  const upper = Math.floor(Math.max(a, b))
  return Math.floor(lower + Math.random() * (upper - lower + 1))
}
