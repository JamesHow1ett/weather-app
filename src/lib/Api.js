//fetch request with cors politics headers in default
async function dataFromApi (url, baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com') {
  const response = await fetch(baseUrl + url);
  return response.json();
}

export default dataFromApi
