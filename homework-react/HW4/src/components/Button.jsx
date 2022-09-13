import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button style={this.props.backgroundColor} onClick={this.props.onClick} className="main-btn">
                {this.props.text}
            </button>
        )
    }
}

Button.defaultProps = {
    backgroundColor: {},
}

Button.propTypes = {
    onClick: PropTypes.func,
    backgroundColor: PropTypes.object,
    text: PropTypes.string,
}

export default Button;