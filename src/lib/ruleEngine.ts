import { checkSubjectVerbAgreement } from '@/validators/checkSubjectVerbAgreement'
import { checkCapitalization } from '@/validators/checkCapitalization'
import { checkArticleUsage } from '@/validators/checkArticleUsage'
import { checkPunctuation } from '@/validators/checkPunctuation'
import { checkPlural } from '@/validators/checkPlural'
import { checkWordOrder } from '@/validators/checkWordOrder'
import { checkPronouns } from '@/validators/checkPronouns'
import { checkPrepositions } from '@/validators/checkPrepositions'
import { checkNegation } from '@/validators/checkNegation'
import { checkVerbTense } from '@/validators/checkVerbTense'
import { checkAuxVerbMissing } from '@/validators/checkAuxVerbMissing'

type Validator = (correct: string, user: string) => string | null

const validators: Validator[] = [
  checkSubjectVerbAgreement,
  checkCapitalization,
  checkArticleUsage,
  checkPunctuation,
  checkPlural,
  checkWordOrder,
  checkPronouns,
  checkPrepositions,
  checkNegation,
  checkVerbTense,
  checkAuxVerbMissing,
]

export function detectGrammarRuleViolations(
  correct: string,
  user: string,
): string[] {
  const violations: string[] = []

  for (const validator of validators) {
    const violationCode = validator(correct, user)
    if (violationCode && !violations.includes(violationCode)) {
      violations.push(violationCode)
    }
  }

  return violations
}
