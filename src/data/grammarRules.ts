import { GrammarRule } from '@/types/grammarRule'
import {
  checkArticleUsage,
  checkAuxVerbMissing,
  checkCapitalization,
  checkExcessivePunctuation,
  checkMisspelledWords,
  checkNegation,
  checkPlural,
  checkPrepositions,
  checkPronouns,
  checkPunctuation,
  checkSubjectVerbAgreement,
  checkTypoComparedToCorrect,
  checkUnknownWords,
  checkVerbTense,
  checkWordOrder,
} from '@/validators'

export const grammarRules: GrammarRule[] = [
  {
    category: 'sv_agreement_3rd_person_present',
    name: '3rd person singular -s',
    description:
      "In present simple tense, verbs with 'he/she/it' require an -s ending.",
    validator: checkSubjectVerbAgreement,
  },
  {
    category: 'missing_article',
    name: 'Missing article before noun',
    description:
      "Common countable nouns need an article ('a/an/the') before them.",
    validator: checkArticleUsage,
  },
  {
    category: 'plural_s_missing',
    name: 'Missing -s for plural noun',
    description: 'Regular plural nouns in English usually end with -s.',
    validator: checkPlural,
  },
  {
    category: 'word_order_adjective_noun',
    name: 'Adjective comes before noun',
    description: 'In English, adjectives usually precede the noun they modify.',
    validator: checkWordOrder,
  },
  {
    category: 'subject_object_pronoun_confusion',
    name: 'Confusion between subject and object pronouns',
    description:
      'Use subject pronouns (I, he, she) in subject position, object pronouns (me, him, her) in object position.',
    validator: checkPronouns,
  },
  {
    category: 'preposition_incorrect',
    name: 'Incorrect preposition',
    description: 'Some verbs require specific prepositions.',
    validator: checkPrepositions,
  },
  {
    category: 'negation_missing_does_not',
    name: "Missing 'does not' for negation",
    description:
      "Negative present simple with 'he/she/it' uses 'does not' + base verb.",
    validator: checkNegation,
  },
  {
    category: 'capitalization_start',
    name: 'Sentence must start with capital letter',
    description: 'All English sentences begin with a capital letter.',
    validator: checkCapitalization,
  },
  {
    category: 'punctuation_period_missing',
    name: 'Missing period at end of sentence',
    description: 'Sentences should end with a period (full stop).',
    validator: checkPunctuation,
  },
  {
    category: 'verb_tense_past_simple',
    name: 'Incorrect verb tense (past)',
    description:
      'Use past tense forms of regular and irregular verbs when describing past actions.',
    validator: checkVerbTense,
  },
  {
    category: 'aux_verb_missing',
    name: 'Missing auxiliary verb in question',
    description:
      "An auxiliary verb is missing at the beginning of a question (e.g. 'Do you like...?').",
    validator: checkAuxVerbMissing,
  },
  {
    category: 'excessive_punctuation',
    name: 'Excessive Punctuation',
    description: 'There are unnecessary repeated punctuation marks.',
    validator: checkExcessivePunctuation,
  },
  {
    category: 'unknown_word',
    name: 'Unknown or Unexpected Word',
    description: 'There is a word that does not match the expected vocabulary.',
    validator: checkUnknownWords,
  },
  {
    category: 'misspelled_word',
    name: 'Misspelled Word',
    description: 'There is a word that appears to be misspelled.',
    validator: checkMisspelledWords,
  },
  {
    category: 'word_typo_from_correct',
    name: 'Incorrect Word',
    description:
      'A word differs slightly from the correct sentence, possibly a typo.',
    validator: checkTypoComparedToCorrect,
  },
]
