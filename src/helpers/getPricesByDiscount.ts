export const getPricesByDiscount = (price: number, discount: number) => ({
  price,
  discount,
  priceWithDiscount: price - price * (discount / 100),
})
