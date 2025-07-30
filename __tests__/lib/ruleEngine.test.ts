import { detectGrammarRuleViolations } from '@/lib/ruleEngine'

describe('Grammar Rule Engine', () => {
  it('should detect missing 3rd person -s', () => {
    const result = detectGrammarRuleViolations(
      'He goes to school.',
      'He go to school.',
    )
    expect(result).toContain('sv_agreement_3rd_person_present')
  })

  it('should detect capitalization at sentence start', () => {
    const result = detectGrammarRuleViolations(
      'She likes pizza.',
      'she likes pizza.',
    )
    expect(result).toContain('capitalization_start')
  })

  it('should detect missing article', () => {
    const result = detectGrammarRuleViolations('I have a dog.', 'I have dog.')
    expect(result).toContain('missing_article')
  })

  it('should detect missing period at sentence end', () => {
    const result = detectGrammarRuleViolations('He is late.', 'He is late')
    expect(result).toContain('punctuation_period_missing')
  })

  it('should detect missing plural -s', () => {
    const result = detectGrammarRuleViolations(
      'I have two dogs.',
      'I have two dog.',
    )
    expect(result).toContain('plural_s_missing')
  })

  it('should detect incorrect adjective-noun word order', () => {
    const result = detectGrammarRuleViolations(
      'He bought a red car.',
      'He bought a car red.',
    )
    expect(result).toContain('word_order_adjective_noun')
  })

  it('should detect subject-object pronoun confusion', () => {
    const result = detectGrammarRuleViolations(
      'She loves him.',
      'Her loves she.',
    )
    expect(result).toContain('subject_object_pronoun_confusion')
  })

  it('should detect incorrect preposition usage', () => {
    const result = detectGrammarRuleViolations(
      'She is good at math.',
      'She is good in math.',
    )
    expect(result).toContain('preposition_incorrect')
  })

  it('should detect incorrect negation structure', () => {
    const result = detectGrammarRuleViolations(
      'He does not play football.',
      'He not play football.',
    )
    expect(result).toContain('negation_missing_does_not')
  })

  it('should detect missing auxiliary verb', () => {
    const result = detectGrammarRuleViolations(
      'Do you like pizza?',
      'You like pizza?',
    )
    expect(result).toContain('aux_verb_missing')
  })

  it('should detect multiple issues', () => {
    const result = detectGrammarRuleViolations(
      'I went to the store.',
      'i go to store',
    )
    expect(result).toEqual(
      expect.arrayContaining([
        'capitalization_start',
        'punctuation_period_missing',
        'verb_tense_past_simple',
      ]),
    )
  })
})
