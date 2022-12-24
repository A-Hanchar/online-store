import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Price = (header: string, priceName: string) => {
  const price = createBlockOfProductDescription(header, priceName)
  return price
}
