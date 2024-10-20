import { Card } from './Card';

export class Deck {
    protected cards: Card[] = [];
    
    public drawCard(): Card {
        if (this.cards.length == 0) {
            throw new Error("Tried drawing a card from an empty deck.");
        }
        return this.cards.pop()!;
    }

    public addCard(card: Card): void {
        this.cards.push(card);
    }

    public viewTopCard(): Card {
        if (this.cards.length == 0) {
            throw new Error("Tried viewing the top card of an empty deck.");
        }
        return this.cards.pop()!;
    }

    protected shuffle(): void {
        // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        let i = this.cards.length;
        while (i != 0) {
            let rand = Math.floor(Math.random() * i);
            i--;

            [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
        }
    }
}