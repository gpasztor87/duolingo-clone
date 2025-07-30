import { GrammarCategory } from '@/types/grammarRule'

export function checkCapitalization(
  _: string,
  user: string,
): GrammarCategory | null {
  const firstChar = user.trim().charAt(0)

  if (firstChar && firstChar === firstChar.toLowerCase()) {
    return 'capitalization_start'
  }

  return null
}
