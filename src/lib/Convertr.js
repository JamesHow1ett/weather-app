//my convertr scales class, will extend in future
class Convert {
  constructor(value) {
    this.value = value
  }

  toMilesFromKilometrs () {
    return this.value < 0 ? 0 : Number((this.value * 0.6214).toFixed(1))
  }

  toKilometrsFromMiles () {
    return this.value < 0 ? 0 : Number((this.value * 1.6).toFixed(1))
  }

  toFahrenheitFromCelsius () {
    return Number(((this.value * 9 / 5) + 32).toFixed(0))
  }
}

export default Convert
