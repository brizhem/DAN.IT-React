import React, {useState} from "react";
import Button from "./Button";
import PropTypes from 'prop-types';
import getProductsFromLocalStorage from "../fixtures/workWithLocalStorage";

const Card = props => {
    let archiveProducts = getProductsFromLocalStorage("markedProducts");
    const [isMarked, setIsMarked] = useState(!!archiveProducts.find(({id}) => id === props.card.id));
    
    function clickMarkedHandler(e) {
        let archiveProducts = getProductsFromLocalStorage("markedProducts");
        if (isMarked) {
            archiveProducts.splice(archiveProducts.indexOf(
                archiveProducts.find(({ id }) => id === props.card.id)
            ), 1);
        } else {
            archiveProducts.push(props.card);
        }

        localStorage.setItem('markedProducts', JSON.stringify(archiveProducts));
        setIsMarked(!isMarked);
    }

    function getMarkedHandler() {
        console.log(props.isArchivePage)
        return props.isArchivePage ? props.clickMarkedHandler : clickMarkedHandler
    };

    return (
        <div className="cards-list__card" id={props.card.id}>
            <img src={props.card.picture} alt="" width="230px" height="230px" />
            {props.closeButton ? <i className="far fa-times-circle" onClick={props.deleteCardClickHandler}></i> : ""}
            <h2 className="cards-list__card--title">{props.card.name}
                <i className={isMarked ? "fas fa-star" : "far fa-star"} onClick={getMarkedHandler()}></i>
            </h2>
            <p>Articul: {props.card.articul}</p>
            <p className="cards-list__card--price">{props.card.price} грн</p>
            <Button text="Add to card" key={props.card.id} onClick={props.addToCardClickHandler}/>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object,
    addToCardClickHandler: PropTypes.func,
    deleteCardClickHandler: PropTypes.func,
    closeBtn: PropTypes.bool,
    isArchivePage: PropTypes.bool
}

Card.defaultTypes = {
    closeBtn: false,
    isArchivePage: false
}

export default Card;