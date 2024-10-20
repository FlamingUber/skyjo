import { Deck } from './Deck';
import { DrawPile } from './DrawPile';

export class Game {
    private drawPile: DrawPile;
    private discardPile: Deck;
    constructor() {
        this.drawPile = new DrawPile();
        this.discardPile = new Deck();
    }

    printGame() {
        console.log(this.drawPile, this.discardPile);
    }
}