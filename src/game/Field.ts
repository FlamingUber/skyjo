import {Card, FlippableCard} from './card';

export const DEFAULT_FIELD_SIZE = 12;
export const DEFAULT_COLUMN_SIZE = 3;


export class Field {
  private cards: FlippableCard[];
  private columnSize: number;

  constructor(cards: Card[], columnSize?: number) {
    this.cards = cards.map(card => new FlippableCard(card.getValue()));
    this.columnSize = columnSize || DEFAULT_COLUMN_SIZE;
  }

  public flip(position: number): Card {
    if (this.cards[position].isVisible()) {
      throw new Error('Cannot flip a visible card.');
    }
    this.cards[position].flip();
    return this.cards[position];
  }

  public swap(position: number, card: Card): Card {
    const swappedCard = this.cards[position];
    this.cards[position] = new FlippableCard(
      card.getValue(),
      /* visible= */ true,
    );
    return swappedCard;
  }

  public view(position: number): Card | undefined {
    if (!this.cards[position].isVisible()) {
      return undefined;
    }
    return this.cards[position];
  }

  public size(): number {
    return this.cards.length;
  }

  public getColumnSize(): number {
    return this.columnSize;
  }
}
