import { GrammarCategory } from '@/types/grammarRule'

export function checkNegation(
  correct: string,
  user: string,
): GrammarCategory | null {
  const correctHas = correct.toLowerCase().includes('does not')
  const userHas = user.toLowerCase().includes('does not')

  if (correctHas && !userHas && user.toLowerCase().includes('not')) {
    return 'negation_missing_does_not'
  }

  return null
}
