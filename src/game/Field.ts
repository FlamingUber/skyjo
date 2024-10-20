import { Card, FlippableCard } from './Card';

export class Field {
    private readonly DEFAULT_FIELD_SIZE = 12;  
    private cards: FlippableCard[];

    constructor() {
        this.cards = new Array(this.DEFAULT_FIELD_SIZE);
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i] = new FlippableCard();
        }
    }

    public flip(position: number): void {
        if (this.cards[position].isVisible()) {
            throw new Error("Cannot flip a visible card.");
        }
        this.cards[position].flip();
    }

    public swap(position: number, card: Card): Card {
        const swappedCard = this.cards[position];
        this.cards[position] = new FlippableCard(card.getValue(), /* visible= */ true);
        return swappedCard;
    }
}