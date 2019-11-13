import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getCoffees, getSnacks, getNaps, getStudies, getFace } from '../selectors/moodSelectors';
import { drinkCoffee, eatSnack, takeNap, study, reset } from '../actions/moodActions';
import { save } from '../actions/saveGameActions';

const Moods = ({ saveGame, handleSelection, coffees, snacks, naps, studies }) => {
  
  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: coffees },
    { name: 'EAT_SNACK', text: 'Snack', count: snacks },
    { name: 'TAKE_NAP', text: 'Nap', count: naps },
    { name: 'STUDY', text: 'Study', count: studies },
    { name: 'RESET', text: 'Reset' },
  ];

  const face = getFace({ coffees, snacks, naps, studies });
  
  return (
    <>
      <button onClick = {() => saveGame({ coffees, snacks, naps, studies })} >Save</button>
      <Controls actions={actions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  coffees: PropTypes.number,
  snacks: PropTypes.number,
  naps: PropTypes.number,
  studies: PropTypes.number,
  saveGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  coffees: getCoffees(state),
  snacks: getSnacks(state),
  naps: getNaps(state),
  studies: getStudies(state)
});

const inputFactoryMethod = {
  DRINK_COFFEE: drinkCoffee,
  EAT_SNACK: eatSnack,
  TAKE_NAP: takeNap,
  STUDY: study,
  RESET: reset,
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(inputFactoryMethod[name]());
  },
  saveGame(game) {
    dispatch(save(game));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
