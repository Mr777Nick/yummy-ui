import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

/**
 * A component to show banner-like information
 */
export const Banner = ({ text, type, ...props }) => {
  return (
    <div
      className={['yummy-banner', `yummy-banner--${type}`].join(' ')}
      {...props}
    >
      <i>
        {text}
      </i>
    </div>
  );
};

Banner.propTypes = {
  /**
   * Text inside the banner
   */
  text: PropTypes.string,

  /**
   * Type of the banner
   */
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
}

Banner.defaultProps = {
  text: 'An example text of the banner',
  type: 'info',
}
