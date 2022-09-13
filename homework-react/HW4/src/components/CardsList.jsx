import React, {useState, useEffect} from "react";
import Card from "./Card";
import PropTypes from 'prop-types';
import Modal from './Modal';
import getProductsFromLocalStorage from "../fixtures/workWithLocalStorage";

const CardsList = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cardId, setCardId] = useState("");
  const [cardsArray, setCardsArray] = useState([]);
  const [isDeleteCard, setIsDeleteCard] = useState(false);
  const classModifier = "mod";
  const closeButton = true;

  useEffect(() => {
    setCardsArray(props.cards);
  }, [props.cards]);
  
  return (
        <section className="cards-list">
          {cardsArray.map(card => <Card key={card.id}
            card={card}
            closeButton={props.closeButton}
            isArchivePage={props.isArchivePage}
            addToCardClickHandler={addToCardClickHandler}
            deleteCardClickHandler={deleteCardClickHandler}
            clickMarkedHandler={ props.clickMarkedHandler}/>
                )}
            <Modal
                classActive={getClassActiveForModal()}
                header='Add card to basket?'
                actions={getButtonsModal()}
                closeButton={closeButton}
                containerClick={containerClickHandler}
                classModifier={classModifier}
                cardId={cardId}
            />
        </section>
    )

    function addToCardClickHandler(e) {
      setCardId(e.target.parentElement.id);
      setIsDeleteCard(false);
      setModalOpen(true);
    }

    function containerClickHandler(event) {
        event.preventDefault();
        if (
            event.target.className === "form-container" ||
            event.target.className === "modal-form__close-btn" ||
            event.target.className.includes("form-btn")
        )
            setModalOpen(false);
    }

    function okButtonClickHendler(e) {
      e.preventDefault();
      let basketProducts = getProductsFromLocalStorage("basketProducts");
      const cradInBasket = basketProducts.find(({ id }) => id == cardId);
      
      if (isDeleteCard) {
        basketProducts.splice(basketProducts.indexOf(cradInBasket), 1);
        setCardsArray(basketProducts);
      } else {
        const card = cardsArray.find(({ id }) => id == cardId);
        if (!cradInBasket && !!card) basketProducts.push(card);  
      }
      
      localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
      setModalOpen(false);
    }

  function getClassActiveForModal() {
    return modalOpen ? { display: "block" } : { display: "none" };
  }

  function getButtonsModal() {
    return [
      <button
        className={`form-btn ${classModifier}`}
        onClick={okButtonClickHendler}
      >
        {"Ok"}
      </button>,
      <button className="form-btn" onClick={containerClickHandler}>
        {"Cancel"}
      </button>,
    ];
  }

  function deleteCardClickHandler(e) {
    setCardId(e.target.parentElement.id);
    setIsDeleteCard(true);
    setModalOpen(true);    
  }
}

CardsList.propTypes = {
  cards: PropTypes.array,
  clickMarkedHandler: PropTypes.func,
  isArchivePage: PropTypes.bool,
}

export default CardsList;