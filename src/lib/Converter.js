/*
  my Converter scales class, will extend in future
  class get a two params: first is scale what need to convert,
  secont is how math need left simbols after point
*/
class Converter {
  constructor(value, fixedRangeValue) {
    this.value = value
    this.fixedRangeValue = fixedRangeValue
  }

  milesToKilometrs() {
    return this.value < 0 ? 0 : Number((this.value * 0.6214).toFixed(this.fixedRangeValue))
  }

  kilometrsToMiles() {
    return this.value < 0 ? 0 : Number((this.value * 1.6).toFixed(this.fixedRangeValue))
  }

  fahrenheitToCelsius() {
    return Number(((this.value * 9 / 5) + 32).toFixed(this.fixedRangeValue))
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

  poundsToKilograms() {
    return Number((this.value / 2.2046).toFixed(this.fixedRangeValue))
  }

  kilogramsToPounds() {
    return Number((this.value * 2.2046).toFixed(this.fixedRangeValue))
  }
}

export default Converter
