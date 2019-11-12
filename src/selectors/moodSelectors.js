export const getCoffees = state => state.moods.coffees;
export const getSnacks = state => state.moods.snacks;
export const getNaps = state => state.moods.naps;
export const getStudies = state => state.moods.studies;

const isTired = state => state.coffees < 1 && state.naps < 1;
const isHyper = state => state.coffees > 3;
const isEducated = state => state.studies > 2;
const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};
