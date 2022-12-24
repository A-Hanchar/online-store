import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Description = (header: string, descriptionName: string) => {
  const description = createBlockOfProductDescription(header, descriptionName)
  return description
}
