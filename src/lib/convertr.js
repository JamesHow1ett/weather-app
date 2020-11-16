//my convertr scales file
function toMiles (kilometrs) {
  return Number((kilometrs * 0.6214).toFixed(1));
}

function toKilometrs (miles) {
  return Number((miles * 1.6).toFixed(1));
}

function toFahrenheit (celsius) {
  return (celsius * 9 / 5) + 32;
}


export { toMiles, toKilometrs, toFahrenheit }