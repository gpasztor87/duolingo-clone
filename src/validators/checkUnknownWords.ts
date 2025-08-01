import { distance } from 'fastest-levenshtein'

import { Validator } from '@/types/grammarRule'

export const checkUnknownWords: Validator = async (correct, user) => {
  const correctWords = correct.toLowerCase().split(/\s+/)
  const userWords = user.toLowerCase().split(/\s+/)

  for (const userWord of userWords) {
    const minDist = Math.min(...correctWords.map((w) => distance(w, userWord)))
    if (minDist > 2) {
      return 'unknown_word'
    }
  }

  return null
}
