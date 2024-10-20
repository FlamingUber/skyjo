export class Card {
    private value: number;

    constructor(value?: number) {
        this.value = value || 0;
    }

    public getValue(): number {
        return this.value;
    }
}

export class FlippableCard extends Card {
    private visible: boolean;

    constructor(value?: number, visible?: boolean) {
        super(value);
        this.visible = visible || false;
    }

    public getValue(): number {
        if (this.visible) {
            return super.getValue();
        }
        throw new Error("Cannot get a FlippableCard's value when it isn't visible.");
    }

    public isVisible(): boolean {
        return this.visible;
    }

    public flip(): void {
        this.visible = !this.visible;
    }
}
  