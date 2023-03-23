import css from './RezetBtn.module.css';
import PropTypes from 'prop-types';

export const ResetButton = ({ onReset }) => {
  return <button onClick={onReset} className={css.btn}>Reset</button>;
};

ResetButton.propTypes = {
  onReset: PropTypes.func.isRequired,
};
