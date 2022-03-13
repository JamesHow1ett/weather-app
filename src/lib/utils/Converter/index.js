import { COEFFICIETS } from './constants';

const {
  milesMultiple,
  kilometersMultiple,
} = COEFFICIETS;

class Converter {
  constructor(value) {
    this.value = Number(value);
  }

  toMilesFromKilometrs() {
    return this.value * milesMultiple;
  }

  toKilometrsFromMiles() {
    return this.value * kilometersMultiple;
  }

  toFahrenheitFromCelsius() {
    return (this.value * 9) / 5 + 32;
  }
}

export default Converter;
