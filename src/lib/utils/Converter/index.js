import { COEFFICIETS } from './constants';

const {
  milesMultiple,
  kilometersMultiple,
} = COEFFICIETS;

class Converter {
  constructor(value) {
    this.value = value;
  }

  static toMilesFromKilometrs() {
    return this.value * milesMultiple;
  }

  static toKilometrsFromMiles() {
    return this.value * kilometersMultiple;
  }

  static toFahrenheitFromCelsius() {
    return (this.value * 9) / 5 + 32;
  }
}

export default Converter;
