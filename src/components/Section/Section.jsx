import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propType = {
  children: PropTypes.node,
  title: PropTypes.string,
};
