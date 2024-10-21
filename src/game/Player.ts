import {Field} from './field';

export class Player {
  id: string;
  field: Field;

  constructor(id: string) {
    this.id = id;
    this.field = new Field();
  }
}
