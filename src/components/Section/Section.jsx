import { PropTypes } from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propType = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired, 
};
