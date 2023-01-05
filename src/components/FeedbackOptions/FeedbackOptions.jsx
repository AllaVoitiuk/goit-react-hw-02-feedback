import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button_box}>
      {options.map(option => {
        // console.log(option.id);
        return (
          <button
            name={option.id}
            key={option.id}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option.nameBtn}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      nameBtn: PropTypes.string,
    })
  ).isRequired,
};
