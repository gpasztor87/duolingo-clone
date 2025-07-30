import { Validator } from '@/types/grammarRule'

export const checkPlural: Validator = async (correct, user) => {
  const cleanWord = (w: string) => w.replace(/[.,!?;:]$/, '')

  const correctWords = correct.toLowerCase().split(/\s+/)
  const userWords = user.toLowerCase().split(/\s+/)

  for (let i = 0; i < correctWords.length - 1; i++) {
    const cw = correctWords[i]

    if (isNumericWord(cw)) {
      const userNoun = cleanWord(userWords[i + 1]?.toLowerCase() || '')
      const correctNoun = cleanWord(correctWords[i + 1]?.toLowerCase() || '')

      const isUserSingular = userNoun && !userNoun.endsWith('s')
      const isCorrectPlural = correctNoun?.endsWith('s')

      if (isUserSingular && isCorrectPlural) {
        return 'plural_s_missing'
      }
    }
  }

  return null
}

const isNumericWord = (word: string): boolean => {
  return (
    /^\d+$/.test(word) ||
    [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
      'hundred',
      'thousand',
      'million',
      'billion',
    ].includes(word.toLowerCase())
  )
}
