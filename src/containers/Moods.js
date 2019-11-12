import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import getFace from '../components/face/GetFace';

const Moods = ({ handleSelection, coffees, snacks, naps, studies }) => {
  const face = getFace({ coffees, snacks, naps, studies });
  
  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', count: coffees },
    { name: 'EAT_SNACK', text: 'Snack', count: snacks },
    { name: 'TAKE_NAP', text: 'Nap', count: naps },
    { name: 'STUDY', text: 'Study', count: studies },
  ];

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
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;

