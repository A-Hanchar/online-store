import { SYMBOL } from 'enums'

export const checkCountAndLengthWords = ({
  string,
  minCountLetters,
  minCountWords,
}: {
  string: string
  minCountLetters: number
  minCountWords: number
}) => {
  const words = string.split(SYMBOL.SPACE)

  if (words.length < minCountWords) {
    return false
  }

  const results = words.map((word) => word.length >= minCountLetters).filter(Boolean)

  return results.length >= minCountWords
}
