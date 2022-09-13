import React, { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import getItems from "../api/items";

const HomePage = (props) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    getItems().then((rsp) => setListItems(rsp));
  }, []);

  return (
    <div>
      <CardsList cards={listItems} />
    </div>
  );
};

export default HomePage;
