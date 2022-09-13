import React from "react";
import PropTypes from 'prop-types';

class Modal extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.classActive} className="form-container" onClick={this.props.containerClick}>
                <form className={`modal-form ${this.props.classModifier}`}>
                    <h2 className={`modal-form__title ${this.props.classModifier}`}>{this.props.header}</h2>
                    <h3 className="modal-form__text">{this.props.text}</h3>
                    {this.props.actions}
                    {this.props.closeButton ? <div className="modal-form__close-btn"></div> : ""}
                </form>
            </div>
        )
    }
}

Modal.propTypes = {
    containerClick: PropTypes.func,
    classModifier: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
}

Modal.defaultTypes = {
    classModifier: "",
    header: "",
    text: "",
}

export default Modal;