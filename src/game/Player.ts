import { Field } from './Field';

export class Player {
  id: string;
  field: Field;

  constructor(id: string) {
    this.id = id;
    this.field = new Field();
  }
}