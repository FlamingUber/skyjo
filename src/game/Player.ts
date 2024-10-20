import { Field } from './Field';

export class Player {
  private name: string;
  private field: Field;

  constructor(name: string) {
    this.field = new Field();
    this.name = name;
  }
}