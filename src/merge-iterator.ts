import { getEvenNumber, getOddNumber } from './generators';

class MergeIterator {
  private items: number[];
  constructor(public iterators: IterableIterator<number>[]) {
    this.items = [];
  }
  [Symbol.iterator]() {
    return {
      next: () => {
        for (const iterator of this.iterators) {
          const item = iterator.next();
          if (item.done === true) continue;
          this.items.push(item.value);
        }
        if (this.items.length === 0) return { value: undefined, done: true };
        this.items.sort((a, b) => b - a);

        return { value: this.items.pop(), done: false };
      },
    };
  }
}

const merged = new MergeIterator([getOddNumber, getEvenNumber]);

const iterator = merged[Symbol.iterator]();

let number = iterator.next();
while (number.value !== undefined && number.value <= 1000) {
  console.log(number);
  number = iterator.next()
}
