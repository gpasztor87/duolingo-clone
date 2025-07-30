import { Validator } from '@/types/grammarRule'

export const checkCapitalization: Validator = async (_, user) => {
  const firstChar = user.trim().charAt(0)

  if (firstChar && firstChar === firstChar.toLowerCase()) {
    return 'capitalization_start'
  }

  return null
}
