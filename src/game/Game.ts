import {hasDuplicates} from './util';
import {Card} from './card';
import {Deck} from './deck';
import {Field, DEFAULT_FIELD_SIZE} from './field';
import {DrawPile} from './draw_pile';
import {Player} from './player';

export class Game {
  private drawPile: DrawPile;
  private discardPile: Deck;
  private players: Player[];
  private current: number;
  private drawnCard: Card | undefined;
  private who_ended: number | undefined;

  constructor(playerIds: string[]) {
    if (hasDuplicates(playerIds)) {
      throw new Error('Player IDs must be unique.');
    }
    if (playerIds.length < 2) {
      throw new Error('Need at least 2 players to start a game.')
    }
    this.drawPile = new DrawPile();
    this.discardPile = new Deck();
    this.current = 0;
    this.players = playerIds.map(id => new Player(id, this.initializeField()));
  }

  public draw(playerId: string, fromDiscard = false): Card {
    this.verifyCurrentPlayer(playerId);
    if (fromDiscard) {
      this.drawnCard = this.discardPile.drawCard();
    } else {
      this.drawnCard = this.drawPile.drawCard();
    }
    return this.drawnCard;
  }

  public discardAndFlip(playerId: string, position: number): Card {
    this.verifyCurrentPlayer(playerId);
    this.verifyDrawnCard();

    this.discardPile.addCard(this.drawnCard!);
    const field = this.currentPlayer().field;
    const card = field.flip(position);

    this.endOfTurnChecksAndMutations(position);
    return card;
  }

  public swap(playerId: string, position: number): Card {
    this.verifyCurrentPlayer(playerId);
    this.verifyDrawnCard();

    const field = this.currentPlayer().field;
    const card = field.swap(position, this.drawnCard!);

    this.endOfTurnChecksAndMutations(position);
    return card;
  }

  public getCurrentPlayer(): string {
    return this.currentPlayer().id;
  }

  private endOfTurnChecksAndMutations(position: number): void {
    this.checkFinished(position);
    this.checkColumn(position);
    this.drawnCard = undefined;
    this.current++;
  }

  private checkFinished(position: number): boolean {
    const field = this.currentPlayer().field;
    for (let i = 0; i < DEFAULT_FIELD_SIZE; i++) {
      if (field.view(i) === undefined) {
        return false;
      }
    }
    this.who_ended = this.current;
    return true;
  }

  private checkColumn(position: number): boolean {
    // TODO: implement this method. should check column and discard all if necessary.
    return false;
  }

  private initializeField(): Field {
    let cards = []
    for (let i = 0; i < DEFAULT_FIELD_SIZE; i++) {
      cards.push(this.drawPile.drawCard());
    }
    return new Field(cards);
  }
  
  private currentPlayer(): Player {
    return this.players[this.current];
  }

  private verifyCurrentPlayer(playerId: string): void {
    if (this.currentPlayer().id !== playerId) {
      throw new Error('It is not your turn, cannot play.');
    }
  }

  private verifyDrawnCard(): void {
    if (this.drawnCard === undefined) {
      throw new Error('Cannot perform this action until card is drawn.');
    }
  }

  printGame() {
    console.log(this);
  }
}
