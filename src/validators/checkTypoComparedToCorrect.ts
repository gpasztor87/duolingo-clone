import { distance } from 'fastest-levenshtein'

import { stripPunctuation } from '@/lib/utils'
import { Validator } from '@/types/grammarRule'

export const checkTypoComparedToCorrect: Validator = async (correct, user) => {
  const correctWords = correct
    .split(/\s+/)
    .map(stripPunctuation)
    .filter(Boolean)

  const userWords = user.split(/\s+/).map(stripPunctuation).filter(Boolean)

  const minLength = Math.min(correctWords.length, userWords.length)

  for (let i = 0; i < minLength; i++) {
    const correctWord = correctWords[i]
    const userWord = userWords[i]

    if (
      correctWord !== userWord &&
      distance(correctWord.toLowerCase(), userWord.toLowerCase()) <= 2
    ) {
      return 'word_typo_from_correct'
    }
  }

  return null
}
