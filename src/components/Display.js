import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => {
  // eslint-disable-next-line no-unused-expressions
  <div className="row display">{ result }</div>;
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
