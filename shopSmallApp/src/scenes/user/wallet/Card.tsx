import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
    },
});

export enum Cards {
    Card1,
    Card2,
    Card3,
    Card4,
    Card5,
    Card6,
}

interface CardProps {
    type: Cards;
}

const Card =  ({ type }: CardProps) => {
    let source: number;
    switch (type) {
        case Cards.Card1:
            source = require("./assets/aeCard1.png");
            break;
        case Cards.Card2:
            source = require("./assets/aeCard2.png");
            break;
        case Cards.Card3:
            source = require("./assets/aeCard3.png");
            break;
        case Cards.Card4:
            source = require("./assets/aeCard4.png");
            break;
        case Cards.Card5:
            source = require("./assets/aeCard5.png");
            break;
        case Cards.Card6:
            source = require("./assets/aeCard6.png");
            break;
        default:
            throw Error("Invalid card style");
    }
    return <Image style={styles.card} {...{ source }} />;
};

export default Card;