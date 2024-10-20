import { Card } from './Card';
import { Deck } from './Deck';

export class DrawPile extends Deck {
    constructor() {
        super()
        for (let cardVal = -2; cardVal <= 12; cardVal++) {
            let numToAdd = 10;
            if (cardVal == -2) {
                numToAdd = 5;
            } else if (cardVal == 0) {
                numToAdd = 15;
            }
            for (let i = 0; i < numToAdd; i++) {
                super.addCard(new Card(cardVal));
            }
        }
        super.shuffle();
    }

    public addCard(card: Card): void {
        throw new Error("Cannot add any card to a DrawPile.");
    }

    public viewTopCard(): Card {
        throw new Error("Cannot view cards in a DrawPile.");
    }
}