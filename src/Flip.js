import React, { Component } from "react";
import Coin from "./Coin";
import "./Flip.css";

export default class Flip extends Component {
    static defaultProps = {
        images: [
            {
                side: "Head",
                imgSrc:
                    "https://previews.123rf.com/images/eldadcarin/eldadcarin1303/eldadcarin130301599/18929643-frontal-view-of-the-obverse-heads-side-of-a-silver-dollar-minted-in-1883-known-by-the-name-morgan-do.jpg",
            },
            {
                side: "Tail",
                imgSrc:
                    "https://previews.123rf.com/images/avqqav/avqqav1507/avqqav150700382/42485873-old-german-coin-mark-isolated-on-white.jpg",
            },
        ],
    };

    constructor(props) {
        super(props);
        this.state = {
            oneImage: null,
            countFlips: 0,
            countHead: 0,
            countTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flibTheCoin() {
        this.setState((curState) => {
            const newCoin = this.props.images[
                Math.floor(Math.random() * this.props.images.length)
            ];
            return {
                oneImage: newCoin.imgSrc,
                countFlips: curState.countFlips + 1,
                countHead:
                    curState.countHead + (newCoin.side === "Head" ? 1 : 0),
                countTails:
                    curState.countTails + (newCoin.side === "Tail" ? 1 : 0),
            };
        });
    }

    handleClick() {
        this.flibTheCoin();
    }
    render() {
        const { countHead, countFlips, countTails, oneImage } = this.state;
        return (
            <div className="Flip">
                {this.state.oneImage && (
                    <Coin img={this.state.oneImage} side={oneImage} />
                )}
                <button onClick={this.handleClick}>Flip The Coin!</button>
                <h3>Number of Flips are: {countFlips}</h3>
                <h3>Number of Head is: {countHead}</h3>
                <h3> Number of Tails is: {countTails}</h3>
            </div>
        );
    }
}
