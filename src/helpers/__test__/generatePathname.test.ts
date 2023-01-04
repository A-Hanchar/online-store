import { routerPathes } from 'router/routerPathes'

import { generatePathname } from '../generatePathname'

describe('generatePathname', () => {
  const categoryIdMock = 'categoryIdMock'
  const brandIdMock = 'categoryIdMock'
  const productIdMock = 'categoryIdMock'

  describe('categoriesCategoryId', () => {
    it('SHOULD return correct value', () => {
      expect(generatePathname.categoriesCategoryId(categoryIdMock)).toBe(`${routerPathes.categories}/${categoryIdMock}`)
    })
  })

  describe('categoriesCategoryIdBrandId', () => {
    it('SHOULD return correct value', () => {
      expect(generatePathname.categoriesCategoryIdBrandId(categoryIdMock, brandIdMock)).toBe(
        `${routerPathes.categories}/${categoryIdMock}/${brandIdMock}`,
      )
    })
  })

  describe('categoriesCategoryIdBrandIdProductId', () => {
    it('SHOULD return correct value', () => {
      expect(generatePathname.categoriesCategoryIdBrandIdProductId(categoryIdMock, brandIdMock, productIdMock)).toBe(
        `${routerPathes.categories}/${categoryIdMock}/${brandIdMock}/${productIdMock}`,
      )
    })
  })
})
