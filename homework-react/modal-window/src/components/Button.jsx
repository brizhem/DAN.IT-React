import React from "react";

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

export default Button;