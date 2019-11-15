import { combineReducers } from 'redux';
import moods from './moodsReducer';
import saveGame from './saveGameReducer';

export default combineReducers({
  moods,
  saveGame
});
