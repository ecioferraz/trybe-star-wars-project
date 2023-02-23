const API_URL = 'https://swapi.dev/api/planets/';

const fetchPlanets = () => (
  fetch(API_URL).then((response) => (response.json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

export default fetchPlanets;
