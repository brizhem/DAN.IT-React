import React from "react";
import PropTypes from 'prop-types';

const Modal = props => {
        return (
            <div style={props.classActive} className="form-container" onClick={props.containerClick}>
                <form className={`modal-form ${props.classModifier}`} id={props.cardId}>
                    <h2 className={`modal-form__title ${props.classModifier}`}>{props.header}</h2>
                    <h3 className="modal-form__text">{props.text}</h3>
                    {props.actions}
                    {props.closeButton ? <div className="modal-form__close-btn"></div> : ""}
                </form>
            </div>
        )
}

Modal.propTypes = {
    containerClick: PropTypes.func,
    classModifier: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
    cardId: PropTypes.string,
}

Modal.defaultTypes = {
    classModifier: "",
    header: "",
    text: "",
    cardId: "",
}

export default Modal;