import { GrammarCategory } from '@/types/grammarRule'

const subjectPronouns = new Set(['i', 'you', 'he', 'she', 'we', 'they', 'it'])
const objectPronouns = new Set(['me', 'you', 'him', 'her', 'us', 'them', 'it'])

export function checkPronouns(
  correct: string,
  user: string,
): GrammarCategory | null {
  const cleanWord = (w: string) =>
    w.toLowerCase().replace(/^[^\w]+|[^\w]+$/g, '')

  const correctWords = correct.split(/\s+/).map(cleanWord)
  const userWords = user.split(/\s+/).map(cleanWord)

  const len = Math.min(correctWords.length, userWords.length)

  for (let i = 0; i < len; i++) {
    const c = correctWords[i]
    const u = userWords[i]

    if (subjectPronouns.has(c) && objectPronouns.has(u) && c !== u) {
      return 'subject_object_pronoun_confusion'
    }

    if (objectPronouns.has(c) && subjectPronouns.has(u) && c !== u) {
      return 'subject_object_pronoun_confusion'
    }
  }

  return null
}
