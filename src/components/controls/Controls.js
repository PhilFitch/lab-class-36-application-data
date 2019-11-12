import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, handleSelection }) => (
  <section className={styles.Controls}>
    {actions.map(({ name, text, count }) => (
      <button name={name} key={name} onClick={() => handleSelection(name)}>
        {text || name} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string,
    count: PropTypes.number
  })).isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default Controls;
