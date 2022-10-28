// https://makeup-api.herokuapp.com/api/v1/products/${path}.json?brand=maybelline

export const getProductItem = async (path) => {
  const response = await fetch(`http://localhost:3000/api/productList/${path}`);
  const result = await response.json();
  return result;
};
