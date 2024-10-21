import { Deck } from './Deck';
import { DEFAULT_FIELD_SIZE, Field } from './Field';
import { DrawPile } from './DrawPile';
import { Player } from './Player';

export class Game {
    private drawPile: DrawPile;
    private discardPile: Deck;
    private players: Player[];
    private started: boolean;
    private currentPlayer: number;
    private who_ended: number | undefined;

    constructor() {
        this.drawPile = new DrawPile();
        this.discardPile = new Deck();
        this.players = [];
        this.started = false;
        this.currentPlayer = 0;
    }

    public addPlayer(id: string): void {
        if (this.started) {
            throw new Error("Cannot add a player once the game has started.");
        }
        if (this.players.some(player => player.id === id)) {
            throw new Error("Cannot create a player with the same ID as an existing player.");
        }
        const newPlayer = new Player(id);
        for (let i = 0; i < DEFAULT_FIELD_SIZE; i++) {
            newPlayer.field.swap(i, this.drawPile.drawCard()); 
        }
        this.players.push(newPlayer);
    }

    public startGame(): void {
        this.discardPile.addCard(this.drawPile.drawCard());
        this.started = true;
    }

    printGame() {
        console.log(this);
    }
}