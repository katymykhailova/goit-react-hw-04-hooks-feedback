import PropTypes from 'prop-types';
import { Paragraph } from './Statistics.styles';

function Statistics({ options, total, positive, feedbackValues }) {
  return (
    <div>
      {options.map(option => (
        <Paragraph key={option}>
          {option}: {feedbackValues[option]}
        </Paragraph>
      ))}
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>Positive feedback: {positive}%</Paragraph>
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
  feedbackValues: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Statistics;
