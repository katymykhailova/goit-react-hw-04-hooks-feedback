import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styles';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <FeedbackButton
          key={option}
          name={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
