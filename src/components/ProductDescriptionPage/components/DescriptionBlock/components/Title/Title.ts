import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Title = (header: string, titleName: string) => {
  const title = createBlockOfProductDescription(header, titleName)
  return title
}
