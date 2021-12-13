import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import { Loader } from './Loader';

/**
 * A component for showing highlighted information
 */
export const Button = ({ text, disabled, loading, outline, backgroundColor, onClick, ...props }) => {
  const disabledText = disabled ? '--disabled' : '';
  const outlineText = outline ? '--outline' : '';
  return (
    <button 
        className={['yummy-button', `yummy-button${outlineText}`].join(' ')}
        disabled={disabled}
        onClick={disabled || loading ? null : onClick}
        {...props}
      >
        {!loading &&
          <i className={['text', `text${disabledText}`, `text${outlineText}`].join(' ')}>
            {text}
          </i>
        }
        {loading &&
          <Loader type='circle'></Loader>
        }
    </button>
  );
};

Button.propTypes = {
  /**
   * Text of the button
   */
  text: PropTypes.string,

  /**
   * Enabled state of the button
   */
  disabled: PropTypes.bool,

  /**
   * Loading state of the button
   */
  loading: PropTypes.bool,

  /**
   * Change button style to outline
   */
  outline: PropTypes.bool,

  /**
   * Optional background color override
   */
  backgroundColor: PropTypes.string,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button Title',
  disabled: false,
  loading: false,
  outline: false,
  backgroundColor: null,
  onClick: null,
}