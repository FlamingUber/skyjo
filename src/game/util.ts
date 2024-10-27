export function hasDuplicates(values: string[]): boolean {
  return new Set(values).size !== values.length;
}

export function shuffle(values: any[]): void {
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  let i = values.length;
  while (i !== 0) {
    const rand = Math.floor(Math.random() * i);
    i--;

    [values[i], values[rand]] = [values[rand], values[i]];
  }
}