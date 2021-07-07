import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styles';

function Notification({ message }) {
  return (
    <div>
      <Paragraph>{message}</Paragraph>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
