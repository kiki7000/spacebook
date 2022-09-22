import React, { Component } from "react";

import Card from "./Card";


class CardRow extends Component {
    constructor ({ className = "", cards = [] }) {
        super ({ className });
        this.state = {
            cards: cards
        }
    }

    render () {
        return (
            <div className = {`flex <md:flex-col justify-between ${this.props.className}`}>
                <Card className = "<md:(!mb-3)" {...this.state.cards[0]} />
                <Card {...this.state.cards[1]} />
                <Card className = "<lg:hidden" {...this.state.cards[2]} />
                <Card className = "<xl:hidden" {...this.state.cards[3]} />
                <Card className = "<2xl:hidden" {...this.state.cards[4]} />
            </div>
        )
    }
}

export default CardRow;
