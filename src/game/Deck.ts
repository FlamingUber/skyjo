import {Card} from './card';
import { shuffle } from './util';

export class Deck {
  protected cards: Card[] = [];

  public drawCard(): Card {
    if (this.cards.length === 0) {
      throw new Error('Tried drawing a card from an empty deck.');
    }
    return this.cards.pop()!;
  }

  public addCard(card: Card): void {
    this.cards.push(card);
  }

  public viewTopCard(): Card {
    if (this.cards.length === 0) {
      throw new Error('Tried viewing the top card of an empty deck.');
    }
    return this.cards[length - 1];
  }

  public size(): number {
    return this.cards.length;
  }

  protected shuffle(): void {
    shuffle(this.cards);
  }
}
