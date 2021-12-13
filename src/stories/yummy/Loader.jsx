import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

/**
 * A component to indicate a running progress
 */
export const Loader = ({ type, ...props }) => {
  return (
    <div 
      className={`loader-${type}`}
      {...props}
    >
      <div></div><div></div><div></div><div></div>
    </div>
  );
}

Loader.propTypes = {
  /**
   * Type of the Loader
   */
  type: PropTypes.oneOf(['circle']),
}

Loader.defaultProps = {
  type: 'circle',
}