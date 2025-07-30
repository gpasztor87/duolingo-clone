import { GrammarCategory } from '@/types/grammarRule'

export function checkPrepositions(
  correct: string,
  user: string,
): GrammarCategory | null {
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
