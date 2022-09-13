import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

const CardsList = (props) => {
    return (
        <section className="cards-list">
            {props.cards.map(card => <Card key={card.id}
                                            card={card}
                                            addToCardClickHandler={props.addToCardClickHandler} />)}
        </section>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array,
}

export default CardsList;