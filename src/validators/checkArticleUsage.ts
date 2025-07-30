import { GrammarCategory } from '@/types/grammarRule'

export function checkArticleUsage(
  correct: string,
  user: string,
): GrammarCategory | null {
  const correctHasArticle = /\b(a|an)\s+\w+/i.test(correct)
  const userHasArticle = /\b(a|an)\s+\w+/i.test(user)

  if (correctHasArticle && !userHasArticle) {
    return 'missing_article'
  }

  return null
}
