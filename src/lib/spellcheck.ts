import nspell from 'nspell'
import dictionary from 'dictionary-en'

let spell: nspell | null = null

export async function getSpellChecker(): Promise<nspell> {
  if (spell) return spell

  return new Promise((resolve, reject) => {
    dictionary((err, dict) => {
      if (err) reject(err)
      else {
        spell = nspell(dict)
        resolve(spell)
      }
    })
  })
}
