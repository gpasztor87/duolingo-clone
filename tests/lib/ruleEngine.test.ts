import { detectGrammarRuleViolations } from '@/lib/ruleEngine'

describe('Grammar Rule Engine', () => {
  it('should detect missing 3rd person -s', async () => {
    const result = await detectGrammarRuleViolations(
      'He goes to school.',
      'He go to school.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'sv_agreement_3rd_person_present' }),
      ]),
    )
  })

  it('should detect capitalization at sentence start', async () => {
    const result = await detectGrammarRuleViolations(
      'She likes pizza.',
      'she likes pizza.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'capitalization_start' }),
      ]),
    )
  })

  it('should detect missing article', async () => {
    const result = await detectGrammarRuleViolations(
      'I have a dog.',
      'I have dog.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'missing_article' }),
      ]),
    )
  })

  it('should detect missing period at sentence end', async () => {
    const result = await detectGrammarRuleViolations(
      'He is late.',
      'He is late',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'punctuation_period_missing' }),
      ]),
    )
  })

  it('should detect missing plural -s', async () => {
    const result = await detectGrammarRuleViolations(
      'I have two dogs.',
      'I have two dog.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'plural_s_missing' }),
      ]),
    )
  })

  it('should detect incorrect adjective-noun word order', async () => {
    const result = await detectGrammarRuleViolations(
      'He bought a red car.',
      'He bought a car red.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'word_order_adjective_noun' }),
      ]),
    )
  })

  it('should detect subject-object pronoun confusion', async () => {
    const result = await detectGrammarRuleViolations(
      'She loves him.',
      'Her loves she.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'subject_object_pronoun_confusion' }),
      ]),
    )
  })

  it('should detect incorrect preposition usage', async () => {
    const result = await detectGrammarRuleViolations(
      'She is good at math.',
      'She is good in math.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'preposition_incorrect' }),
      ]),
    )
  })

  it('should detect incorrect negation structure', async () => {
    const result = await detectGrammarRuleViolations(
      'He does not play football.',
      'He not play football.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'negation_missing_does_not' }),
      ]),
    )
  })

  it('should detect missing auxiliary verb', async () => {
    const result = await detectGrammarRuleViolations(
      'Do you like pizza?',
      'You like pizza?',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'aux_verb_missing' }),
      ]),
    )
  })

  it('should detect excessive punctuation', async () => {
    const result = await detectGrammarRuleViolations(
      'Hello world!',
      'Hello world!!',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'excessive_punctuation' }),
      ]),
    )
  })

  it('should detect unknown word', async () => {
    const result = await detectGrammarRuleViolations(
      'Hello world!',
      'Hello ther!',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'unknown_word' }),
      ]),
    )
  })

  describe('Typo detection validator', () => {
    it('should detect misspelled words', async () => {
      const result = await detectGrammarRuleViolations(
        'Hello world!',
        'Heloo world!',
      )

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ code: 'misspelled_word' }),
        ]),
      )
    })

    it('should detect a small typo compared to the correct sentence', async () => {
      const result = await detectGrammarRuleViolations(
        'Hello world!',
        'Hell world!',
      )

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ code: 'word_typo_from_correct' }),
        ]),
      )
    })

    it('should detect multiple typos', async () => {
      const result = await detectGrammarRuleViolations(
        'Hello there friend!',
        'Hell thore freind!',
      )

      expect(result).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ code: 'word_typo_from_correct' }),
        ]),
      )
    })

    it('should not flag very different words', async () => {
      const result = await detectGrammarRuleViolations(
        'Hello world!',
        'Pizza moon!',
      )

      expect(result).not.toContain('word_typo_from_correct')
    })
  })

  it('should detect multiple issues', async () => {
    const result = await detectGrammarRuleViolations(
      'I went to the store.',
      'i go to store',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'capitalization_start' }),
        expect.objectContaining({ code: 'punctuation_period_missing' }),
        expect.objectContaining({ code: 'verb_tense_past_simple' }),
      ]),
    )
  })
})
