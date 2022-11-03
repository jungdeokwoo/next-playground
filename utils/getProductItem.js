// https://makeup-api.herokuapp.com/api/v1/products/${path}.json?brand=maybelline

export const getProductItem = async (path) => {
  const response = await fetch(`http://localhost:4000/DATA?id=${path}`);
  const result = await response.json();
  return result[0];
};
