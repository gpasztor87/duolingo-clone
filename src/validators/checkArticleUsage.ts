import { Validator } from '@/types/grammarRule'

export const checkArticleUsage: Validator = async (correct, user) => {
  const correctHasArticle = /\b(a|an)\s+\w+/i.test(correct)
  const userHasArticle = /\b(a|an)\s+\w+/i.test(user)

  if (correctHasArticle && !userHasArticle) {
    return 'missing_article'
  }

  return null
}
