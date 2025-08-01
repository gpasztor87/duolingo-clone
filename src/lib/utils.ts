import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalize(text: string) {
  return text.trim().toLowerCase()
}

export function stripPunctuation(word: string) {
  return word.replace(/[.,!?;:()"]/g, '')
}
