import {Field} from './field';

export class Player {
  id: string;
  field: Field;

  constructor(id: string, field: Field) {
    this.id = id;
    this.field = field;
  }
}
