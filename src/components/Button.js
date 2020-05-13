import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => {
  // eslint-disable-next-line no-unused-expressions
  <div>{ value }</div>;
};

Button.defaultProps = {
  value: 'NaN',
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
