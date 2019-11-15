import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelectors';
import { save } from '../actions/saveGameActions';

import styles from './History.css';

const History = ({ saveGame, coffees, snacks, naps, studies }) => {

  return (
    <section className={styles.History}>
      <button onClick={() => saveGame({ coffees, snacks, naps, studies })}>Save</button>
      
    </section>
  );
};

History.propTypes = {
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

const mapDispatchToProps = dispatch => ({
  saveGame(game) {
    dispatch(save(game));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
