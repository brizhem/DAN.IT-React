import React, { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
// import getItems from "../api/items";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions";

const HomePage = (props) => {
  //const [listItems, setListItems] = useState([]);

  // useEffect(() => {
  // getItems().then((rsp) => setListItems(rsp));
  const dispatch = useDispatch();
  dispatch(fetchProducts());
  // }, []);
  const listItems = useSelector((state) => state.products);

  return (
    <div>
      <CardsList cards={listItems} />
    </div>
  );
};

export default HomePage;
