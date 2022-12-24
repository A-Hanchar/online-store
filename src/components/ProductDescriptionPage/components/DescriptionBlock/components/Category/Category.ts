import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Category = (header: string, categoryName: string) => {
  const category = createBlockOfProductDescription(header, categoryName)
  return category
}
