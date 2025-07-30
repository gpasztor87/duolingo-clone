import { Violation } from '@/types/grammarRule'
import { grammarRules } from '@/data/grammarRules'

export async function detectGrammarRuleViolations(
  correct: string,
  user: string,
): Promise<Violation[]> {
  const results = await Promise.all(
    grammarRules.map(async (rule) => {
      const result = await rule.validator(correct, user)
      return result
        ? {
            code: rule.category,
            description: rule.description,
          }
        : null
    }),
  )

  return results.filter((r): r is NonNullable<typeof r> => r !== null)
}
