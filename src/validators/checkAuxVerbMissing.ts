import { Validator } from '@/types/grammarRule'

const auxVerbs = new Set([
  'do',
  'does',
  'did',
  'will',
  'would',
  'can',
  'could',
  'should',
  'shall',
  'may',
  'might',
  'must',
])

export const checkAuxVerbMissing: Validator = async (correct, user) => {
  const clean = (w: string) => w.toLowerCase().replace(/^[^\w]+|[^\w]+$/g, '')

  const correctWords = correct.split(/\s+/).map(clean)
  const userWords = new Set(user.split(/\s+/).map(clean))

  const firstCorrectWord = correctWords[0]

  if (auxVerbs.has(firstCorrectWord) && !userWords.has(firstCorrectWord)) {
    return 'aux_verb_missing'
  }

  return null
}
