import { getPricesByDiscount } from '../getPricesByDiscount'

describe('getPricesByDiscount', () => {
  it('SHOULD return correct object', () => {
    const priceMock = 100
    const discountMock = 10

    const priceWithDiscountMock = priceMock - priceMock * (discountMock / 100)

    expect(getPricesByDiscount(priceMock, discountMock)).toEqual({
      price: priceMock,
      discount: discountMock,
      priceWithDiscount: priceWithDiscountMock,
    })
  })
})
