export default async (url, baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com') => {
  const response = await fetch(baseUrl + url);
  return response.json();
};
