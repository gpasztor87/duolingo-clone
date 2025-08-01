import { getSpellChecker } from '@/lib/spellcheck'
import { stripPunctuation } from '@/lib/utils'

import { Validator } from '@/types/grammarRule'

export const checkMisspelledWords: Validator = async (_, user) => {
  const spell = await getSpellChecker()

  const userWords = user.split(/\s+/).map(stripPunctuation).filter(Boolean)

  for (const word of userWords) {
    if (!spell.correct(word)) {
      return 'misspelled_word'
    }
  }

  return null
}
