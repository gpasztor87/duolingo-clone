import { Validator } from '@/types/grammarRule'

export const checkVerbTense: Validator = async (correct, user) => {
  const irregularPairs = [
    { past: 'went', base: 'go' },
    { past: 'ate', base: 'eat' },
    { past: 'drank', base: 'drink' },
    { past: 'saw', base: 'see' },
    { past: 'bought', base: 'buy' },
    { past: 'made', base: 'make' },
  ]

  const c = correct.toLowerCase()
  const u = user.toLowerCase()

  for (const { past, base } of irregularPairs) {
    if (c.includes(past) && u.includes(base) && !u.includes(past)) {
      return 'verb_tense_past_simple'
    }
  }

  return null
}
