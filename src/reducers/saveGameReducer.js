import { SAVE } from '../actions/saveGameActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case SAVE:
      return [...state, action.payload];
    default:
      return state;
  }
}
