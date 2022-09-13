import React, { useState, useEffect } from "react";
import CardsList from "../components/CardsList";
import getProductsFromLocalStorage from "../fixtures/workWithLocalStorage";

const ArchivePage = (props) => {
  const [archiveProducts, setArchiveProdacts] = useState([]);

  useEffect(() => {
    setArchiveProdacts(getProductsFromLocalStorage("markedProducts"));
  }, []);

  return (
    <CardsList
      cards={archiveProducts}
      isArchivePage={true}
      clickMarkedHandler={clickMarkedHandler}
    />
  );

  function clickMarkedHandler(e) {
    let archiveProductsNow = getProductsFromLocalStorage("markedProducts");
    const cardId = e.target.parentElement.parentElement.id;
    const isMarked = !!archiveProductsNow.find(({ id }) => id == cardId);
    if (isMarked) {
      archiveProductsNow.splice(
        archiveProductsNow.indexOf(
          archiveProductsNow.find(({ id }) => id == cardId)
        ),
        1
      );
    }

    setArchiveProdacts(archiveProductsNow);
    localStorage.setItem("markedProducts", JSON.stringify(archiveProductsNow));
  }
};

export default ArchivePage;
