// const URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

export const getProductLists = async () => {
  const response = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  );
  const result = await response.json();
  return result;
};
