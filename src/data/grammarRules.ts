import { GrammarRule } from '@/types/grammarRule'

export const grammarRules: GrammarRule[] = [
  {
    id: 'sv_agreement_3rd_person_present',
    name: '3rd person singular -s',
    description:
      "In present simple tense, verbs with 'he/she/it' require an -s ending.",
  },
  {
    id: 'missing_article',
    name: 'Missing article before noun',
    description:
      "Common countable nouns need an article ('a/an/the') before them.",
  },
  {
    id: 'plural_s_missing',
    name: 'Missing -s for plural noun',
    description: 'Regular plural nouns in English usually end with -s.',
  },
  {
    id: 'word_order_adjective_noun',
    name: 'Adjective comes before noun',
    description: 'In English, adjectives usually precede the noun they modify.',
  },
  {
    id: 'subject_object_pronoun_confusion',
    name: 'Confusion between subject and object pronouns',
    description:
      'Use subject pronouns (I, he, she) in subject position, object pronouns (me, him, her) in object position.',
  },
  {
    id: 'preposition_incorrect',
    name: 'Incorrect preposition',
    description: 'Some verbs require specific prepositions.',
  },
  {
    id: 'negation_missing_does_not',
    name: "Missing 'does not' for negation",
    description:
      "Negative present simple with 'he/she/it' uses 'does not' + base verb.",
  },
  {
    id: 'capitalization_start',
    name: 'Sentence must start with capital letter',
    description: 'All English sentences begin with a capital letter.',
  },
  {
    id: 'punctuation_period_missing',
    name: 'Missing period at end of sentence',
    description: 'Sentences should end with a period (full stop).',
  },
  {
    id: 'verb_tense_past_simple',
    name: 'Incorrect verb tense (past)',
    description:
      'Use past tense forms of regular and irregular verbs when describing past actions.',
  },
  {
    id: 'aux_verb_missing',
    name: 'Missing auxiliary verb in question',
    description:
      "An auxiliary verb is missing at the beginning of a question (e.g. 'Do you like...?').",
  },
]
