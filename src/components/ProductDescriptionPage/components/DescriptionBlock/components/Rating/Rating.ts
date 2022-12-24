import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Rating = (header: string, ratingName: string) => {
  const rating = createBlockOfProductDescription(header, ratingName)
  return rating
}
