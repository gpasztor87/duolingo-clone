import { Validator } from '@/types/grammarRule'

export const checkWordOrder: Validator = async (correct, user) => {
  const cleanWord = (w: string) =>
    w.toLowerCase().replace(/^[^\w]+|[^\w]+$/g, '')

  const correctWords = correct.split(/\s+/).map(cleanWord)
  const userWords = user.split(/\s+/).map(cleanWord)

  const userWordSet = new Set(userWords)

  for (let i = 0; i < correctWords.length - 1; i++) {
    const first = correctWords[i]
    const second = correctWords[i + 1]

    if (userWordSet.has(first) && userWordSet.has(second)) {
      for (let j = 0; j < userWords.length - 1; j++) {
        if (userWords[j] === second && userWords[j + 1] === first) {
          return 'word_order_adjective_noun'
        }
      }
    }
  }

  return null
}
