
async function dataFromApi (url = '', data = {}) {
  const response = await fetch(url);
  return response.json();
}

export default dataFromApi
