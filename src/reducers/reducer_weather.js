import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // [city, ctity, city] not [city, [city, city]]
  }
  return state;
}
