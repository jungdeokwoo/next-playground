// https://makeup-api.herokuapp.com/api/v1/products/${path}.json?brand=maybelline

export const getProductItem = async (path) => {
  const response = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products/${path}.json?brand=maybelline`
  );
  const result = await response.json();
  return result;
};
