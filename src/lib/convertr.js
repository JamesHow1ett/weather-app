//my convertr scales file
function toMiles (kilometrs) {
  return kilometrs === 0 ? 0 : Number((kilometrs * 0.6214).toFixed(1));
}

function toKilometrs (miles) {
  return miles === 0 ? 0 : Number((miles * 1.6).toFixed(1));
}

function toFahrenheit (celsius) {
  return celsius === 0 ? 0 : (celsius * 9 / 5) + 32;
}


export { toMiles, toKilometrs, toFahrenheit }