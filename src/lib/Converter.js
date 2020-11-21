/*
  my Converter scales class, will extend in future
  class get a two params: first is scale what need to convert,
  secont is how match need left simbols after point
*/
class Converter {
  constructor(value, fixedRangeValue) {
    this.value = value
    this.fixedRangeValue = fixedRangeValue
  }
}

class TempretureConverter extends Converter {
  fahrenheitToCelsius() {
    return Number(((this.value - 32) * (5/9)).toFixed(this.fixedRangeValue))
  }

  celsiusToFahrenheit() {
    return Number(((this.value * 9 / 5) + 32).toFixed(this.fixedRangeValue))
  }
}

class WeigthConverter extends Converter {
  poundsToKilograms() {
    return Number((this.value / 2.2046).toFixed(this.fixedRangeValue))
  }

  kilogramsToPounds() {
    return Number((this.value * 2.2046).toFixed(this.fixedRangeValue))
  }
}

class LengthConverter extends Converter {
  milesToKilometrs() {
    return this.value < 0 ? 0 : Number((this.value * 0.6214).toFixed(this.fixedRangeValue))
  }

  kilometrsToMiles() {
    return this.value < 0 ? 0 : Number((this.value * 1.6).toFixed(this.fixedRangeValue))
  }

  inchesToCentimeters() {
    return Number((this.value * (2.54 / this.value)).toFixed(this.fixedRangeValue))
  }

  centimetersToInches() {
    return Number((this.value * (1 / 2.54)).toFixed(this.fixedRangeValue))
  }

  feetToMeters() {
    return Number((this.value / 3.2808).toFixed(this.fixedRangeValue))
  }

  metersToFeet() {
    return Number((this.value * 3.2808).toFixed(this.fixedRangeValue))
  }
}

export { TempretureConverter, WeigthConverter, LengthConverter }
