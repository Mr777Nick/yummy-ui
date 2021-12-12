import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

/**
 * A component for showing highlighted information
 */
export const Label = ({ type, size, label, backgroundColor, ...props }) => {
  return (
    <div
      className={['yummy-label', `yummy-label--${type}`, `yummy-label--${size}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      <h1
        className={`yummy-label-font--${size}`}
      >
        {label}
      </h1>
    </div>
  );
};

Label.propTypes = {
  /**
   * Type of the button's theme
   */
  type: PropTypes.oneOf(['info', 'warning', 'danger', 'gray']),
  
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Label of the button
   */
  label: PropTypes.string,

  /**
   * Optional background color override
   */
  backgroundColor: PropTypes.string,
};

Label.defaultProps = {
  type: 'info',
  size: 'small',
  label: 'Label',
  backgroundColor: null,
}