import { Validator } from '@/types/grammarRule'

export const checkPrepositions: Validator = async (correct, user) => {
  const commonMistakes = [
    { expected: 'good at', wrong: 'good in' },
    { expected: 'interested in', wrong: 'interested on' },
    { expected: 'depend on', wrong: 'depend of' },
  ]

  const c = correct.toLowerCase()
  const u = user.toLowerCase()

  for (const { expected, wrong } of commonMistakes) {
    if (c.includes(expected) && u.includes(wrong)) {
      return 'preposition_incorrect'
    }
  }

  return null
}
