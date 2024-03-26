import { clsx, ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classNames: Array<ClassValue>) => twMerge(clsx(classNames))
