import { Validator } from '@/types/grammarRule'

export const checkExcessivePunctuation: Validator = async (_, user) => {
  const excessivePunct = user.match(/([!?.,])\1{1,}/g)

  if (excessivePunct) {
    return 'excessive_punctuation'
  }

  return null
}
