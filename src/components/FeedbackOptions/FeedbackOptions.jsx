import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ btnNames, onLeaveFeedback }) => {
  return (
    <div className={css.button_box}>
      {btnNames.map(name => {
        // console.log(option.id);
        return (
          <button
            name={name}
            key={name}
            type="button"
            onClick={onLeaveFeedback}
          >
            {name[0].toUpperCase() + name.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  btnNames: PropTypes.array.isRequired,
  onLeaveFeedback:PropTypes.func,
};
