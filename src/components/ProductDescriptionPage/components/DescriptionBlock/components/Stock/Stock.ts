import { createBlockOfProductDescription } from 'components/ProductDescriptionPage/components/CreateBlockOfProductDescription'

export const Stock = (header: string, stockName: string) => {
  const stock = createBlockOfProductDescription(header, stockName)
  return stock
}
