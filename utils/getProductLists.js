// const URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

export const getProductLists = async () => {
  const response = await fetch('http://localhost:4000/DATA')
  const result = await response.json()
  return result
}
