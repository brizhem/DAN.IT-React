import React, { useState } from "react";
import CardsList from "../components/CardsList";
import getProductsFromLocalStorage from "../fixtures/workWithLocalStorage";

const BasketPage = (props) => {
  const [basketProducts, setBasketProducts] = useState(
    getProductsFromLocalStorage("basketProducts")
  );

  return <CardsList cards={basketProducts} closeButton={true} />;
};

export default BasketPage;
