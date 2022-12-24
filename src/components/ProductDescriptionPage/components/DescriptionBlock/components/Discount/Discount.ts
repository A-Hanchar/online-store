import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Discount = (header: string, discountName: string) => {
  const discount = createBlockOfProductDescription(header, discountName)
  return discount
}
