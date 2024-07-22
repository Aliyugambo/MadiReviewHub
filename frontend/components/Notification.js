import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@mui/material';

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <Alert severity={type} sx={{ margin: '10px 0' }}>
      {message}
    </Alert>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error']),
};

export default Notification;
