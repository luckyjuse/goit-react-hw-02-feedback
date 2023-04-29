import PropTypes from 'prop-types';
import { MessageP } from './Notification.styled';

export const Notification = ({ message }) => <MessageP>{message}</MessageP>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
