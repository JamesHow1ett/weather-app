//my convertr scales class, will extend in future
class Convert {
  constructor(value) {
    this.value = value
  }

  toMilesFromKilometrs (value) {
    return value < 0 ? 0 : Number((value * 0.6214).toFixed(1))
  }

  toKilometrsFromMiles (value) {
    return value < 0 ? 0 : Number((value * 1.6).toFixed(1))
  }

  toFahrenheitFromCelsius (value) {
    return Number(((value * 9 / 5) + 32).toFixed(0))
  }
}

export default Convert
