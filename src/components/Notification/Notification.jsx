import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = () => {
  return <h1 className={css.title}>There is no feedback</h1>;
};

Notification.propType = {
  message: PropTypes.string,
};
