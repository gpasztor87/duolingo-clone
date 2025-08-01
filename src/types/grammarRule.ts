export type GrammarCategory =
  | 'sv_agreement_3rd_person_present'
  | 'missing_article'
  | 'plural_s_missing'
  | 'word_order_adjective_noun'
  | 'subject_object_pronoun_confusion'
  | 'preposition_incorrect'
  | 'negation_missing_does_not'
  | 'capitalization_start'
  | 'punctuation_period_missing'
  | 'verb_tense_past_simple'
  | 'aux_verb_missing'
  | 'excessive_punctuation'
  | 'unknown_word'
  | 'misspelled_word'
  | 'word_typo_from_correct'

export type Validator = (
  correct: string,
  user: string,
) => Promise<GrammarCategory | null>

export interface GrammarRule {
  name: string
  description: string
  category: GrammarCategory
  validator: Validator
}

export interface Violation {
  code: string
  description: string
}
