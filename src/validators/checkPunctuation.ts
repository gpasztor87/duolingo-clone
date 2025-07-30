import { Validator } from '@/types/grammarRule'

export const checkPunctuation: Validator = async (correct, user) => {
  const endsWithPeriod = correct.trim().endsWith('.')
  const userEndsWithPeriod = user.trim().endsWith('.')

  if (endsWithPeriod && !userEndsWithPeriod) {
    return 'punctuation_period_missing'
  }

  return null
}
