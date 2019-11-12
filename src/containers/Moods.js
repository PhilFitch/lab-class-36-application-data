import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { getCoffees, getSnacks, getNaps, getStudies, getFace } from '../selectors/moodSelectors';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';

const Moods = ({ handleSelection, coffees, snacks, naps, studies }) => {
  
  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: coffees },
    { name: 'EAT_SNACK', text: 'Snack', count: snacks },
    { name: 'TAKE_NAP', text: 'Nap', count: naps },
    { name: 'STUDY', text: 'Study', count: studies },
  ];

  const face = getFace({ coffees, snacks, naps, studies });
  
  return (
    <>
      <Controls actions={actions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};

Moods.propTypes = {
  handleSelection: PropTypes.func.isRequired,
  coffees: PropTypes.number.isRequired,
  snacks: PropTypes.number.isRequired,
  naps: PropTypes.number.isRequired,
  studies: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  coffees: getCoffees(state),
  snacks: getSnacks(state),
  naps: getNaps(state),
  studies: getStudies(state)
});

const inputFactoryMethod = {
  DRINK_COFFEE: drinkCoffee(),
  EAT_SNACK: eatSnack(),
  TAKE_NAP: takeNap(),
  STUDY: study()
};

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(inputFactoryMethod[name]);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);
