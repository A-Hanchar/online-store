import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Brand = (header: string, brandName: string) => {
  const brand = createBlockOfProductDescription(header, brandName)
  return brand
}
