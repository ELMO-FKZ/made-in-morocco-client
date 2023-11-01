export function newPrice(product) {
    return Math.round(product.price * (1 - product.promotion/100))
}