import React from 'react';
import PropTypes from 'prop-types';
import './label.css';

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
  type: PropTypes.oneOf(['info', 'warning', 'danger', 'gray']),

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  label: PropTypes.string,

  backgroundColor: PropTypes.string,
};

Label.defaultProps = {
  type: 'info',
  size: 'small',
  label: 'Label',
  backgroundColor: null,
}