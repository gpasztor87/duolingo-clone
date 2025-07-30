import { GrammarCategory } from '@/types/grammarRule'

export function checkPunctuation(
  correct: string,
  user: string,
): GrammarCategory | null {
  const endsWithPeriod = correct.trim().endsWith('.')
  const userEndsWithPeriod = user.trim().endsWith('.')

  if (endsWithPeriod && !userEndsWithPeriod) {
    return 'punctuation_period_missing'
  }

  return null
}
