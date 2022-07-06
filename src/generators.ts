enum NumberType {
  ODD = -1,
  EVEN = 0,
}


class NumberGenerator
{
  // private number = -1;
  constructor(private number: NumberType, private limit = 100000) {}
  *[Symbol.iterator]() {
    while (this.number <= this.limit) {
      this.number += 2;
      yield this.number;
    }
  }

}


const oddNumberGeneratorInstance = new NumberGenerator(NumberType.ODD);

const getOddNumber = oddNumberGeneratorInstance[Symbol.iterator]();

const evenNumberGeneratorInstance = new NumberGenerator(NumberType.EVEN);

const getEvenNumber = evenNumberGeneratorInstance[Symbol.iterator]();

export { getOddNumber, getEvenNumber }