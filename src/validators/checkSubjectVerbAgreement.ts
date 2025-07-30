import { GrammarCategory } from '@/types/grammarRule'

export function checkSubjectVerbAgreement(
  correct: string,
  user: string,
): GrammarCategory | null {
  const regex = /\b(he|she|it)\b\s+(\w+)/i
  const correctMatch = correct.toLowerCase().match(regex)
  const userMatch = user.toLowerCase().match(regex)

  if (
    correctMatch &&
    userMatch &&
    correctMatch[1] === userMatch[1] &&
    correctMatch[2].endsWith('s') &&
    !userMatch[2].endsWith('s')
  ) {
    return 'sv_agreement_3rd_person_present'
  }

  return null
}
