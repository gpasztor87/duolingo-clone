import { detectGrammarRuleViolations } from '@/lib/ruleEngine'

describe('Grammar Rule Engine', () => {
  it('should detect missing 3rd person -s', async () => {
    const result = await detectGrammarRuleViolations(
      'He goes to school.',
      'He go to school.',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        {
          code: 'sv_agreement_3rd_person_present',
          description:
            "In present simple tense, verbs with 'he/she/it' require an -s ending.",
        },
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
        {
          code: 'capitalization_start',
          description: 'All English sentences begin with a capital letter.',
        },
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
        {
          code: 'missing_article',
          description:
            "Common countable nouns need an article ('a/an/the') before them.",
        },
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
        {
          code: 'punctuation_period_missing',
          description: 'Sentences should end with a period (full stop).',
        },
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
        {
          code: 'plural_s_missing',
          description: 'Regular plural nouns in English usually end with -s.',
        },
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
        {
          code: 'word_order_adjective_noun',
          description:
            'In English, adjectives usually precede the noun they modify.',
        },
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
        {
          code: 'subject_object_pronoun_confusion',
          description:
            'Use subject pronouns (I, he, she) in subject position, object pronouns (me, him, her) in object position.',
        },
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
        {
          code: 'preposition_incorrect',
          description: 'Some verbs require specific prepositions.',
        },
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
        {
          code: 'negation_missing_does_not',
          description:
            "Negative present simple with 'he/she/it' uses 'does not' + base verb.",
        },
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
        {
          code: 'aux_verb_missing',
          description:
            "An auxiliary verb is missing at the beginning of a question (e.g. 'Do you like...?').",
        },
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

  it('should detect multiple issues', async () => {
    const result = await detectGrammarRuleViolations(
      'I went to the store.',
      'i go to store',
    )

    expect(result).toEqual(
      expect.arrayContaining([
        {
          code: 'capitalization_start',
          description: 'All English sentences begin with a capital letter.',
        },
        {
          code: 'punctuation_period_missing',
          description: 'Sentences should end with a period (full stop).',
        },

        {
          code: 'verb_tense_past_simple',
          description:
            'Use past tense forms of regular and irregular verbs when describing past actions.',
        },
      ]),
    )
  })
})
