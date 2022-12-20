export const capitalizeText = (text: string) => {
  return text
    .split(' ')
    .map((word) => {
      const lowerText = word.toLowerCase()

      return word.charAt(0).toUpperCase() + lowerText.slice(1)
    })
    .join(' ')
}
