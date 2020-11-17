//my convertr scales file
function toMiles (kilometrs) {
  return kilometrs < 0 ? 0 : Number((kilometrs * 0.6214).toFixed(1));
}

function toKilometrs (miles) {
  return miles < 0 ? 0 : Number((miles * 1.6).toFixed(1));
}

function toFahrenheit (celsius) {
  return Number(((celsius * 9 / 5) + 32).toFixed(0));
}


export { toMiles, toKilometrs, toFahrenheit }