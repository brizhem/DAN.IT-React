import React, {useState} from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

const Card = props => {
    let markedProducts = getMarkedProducts();
    const [isMarked, setIsMarked] = useState(markedProducts.includes(props.card.id));
    
    function clickMarkedHandler(e) {
        let markedProducts = getMarkedProducts();

        if (isMarked) {
            markedProducts.splice(markedProducts.indexOf(props.card.id), 1);

        } else {
            markedProducts.push(props.card.id);
        }

        localStorage.setItem('markedProducts', JSON.stringify(markedProducts));
        setIsMarked(!isMarked);
    }

    return (
        <div className="cards-list__card" id={props.card.id}>
            <img src={props.card.picture} alt="" width="230px" height="230px"/>
            <h2 className="cards-list__card--title">{props.card.name}
                <i className={isMarked ? "fas fa-star" : "far fa-star"} onClick={clickMarkedHandler}></i>
            </h2>
            <p>Articul: {props.card.articul}</p>
            <p className="cards-list__card--price">{props.card.price} грн</p>
            <Button text="Add to card" key={props.card.id} onClick={props.addToCardClickHandler}/>
        </div>
    )
}

const getMarkedProducts = () => {
    let markedProductsStr = localStorage.getItem('markedProducts');
    let markedProducts = [];
        
    if (!!markedProductsStr) markedProducts = JSON.parse(markedProductsStr);

    return markedProducts;
}

Card.propTypes = {
    card: PropTypes.object,
    addToCardClickHandler: PropTypes.func,
}

export default Card;