import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
    render() {
        const { img, side } = this.props;
        return (
            <div className="Coin">
                <h1>Hello from the coin component</h1>
                <img src={img} alt={side} />
            </div>
        );
    }
}

export default Coin;
