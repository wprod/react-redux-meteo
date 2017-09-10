const API_KEY = '0d581a59c734d74766353cea163dc6c3'; //free public api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWether(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
