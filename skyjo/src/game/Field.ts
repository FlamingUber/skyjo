class Field {
    cards: number[];
    cardFaces: boolean[];

    public constructor(cards: number[], cardFaces: boolean[]) {
        this.cards = cards;
        this.cardFaces = cardFaces;
    }

    public flip(position: number) {
        console.log("flip()", this.cards[position]);
        this.cardFaces[position] = true;
    }

    public swap(position: number, card: number) {
        console.log("swap()", this.cards[position], "with", card);
        this.cards[position] = card
        this.cardFaces[position] = true;
    }
}