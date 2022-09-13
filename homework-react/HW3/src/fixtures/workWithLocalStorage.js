const getProductsFromLocalStorage = (nameKey) => {
  let markedProductsStr = localStorage.getItem(nameKey);
  let markedProducts = [];

  if (!!markedProductsStr) markedProducts = JSON.parse(markedProductsStr);

  return markedProducts;
};

export default getProductsFromLocalStorage;
