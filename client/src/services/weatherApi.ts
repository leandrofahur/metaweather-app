import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'http://api.weatherstack.com/',
});

export { weatherApi };
