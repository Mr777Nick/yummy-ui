import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * A component to input a value
 */
export const Input = ({ placeholder, label, error, helperText, disabled, ...props }) => {
  const errorText = error ? '--error' : '';

  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = event => {
    setInputValue(event.target.value);
  };

  return (
    <div
      className={['yummy-input', `yummy-input${errorText}`].join(' ')}
    >
      <div
        className={'label'}
      >
        {label}
      </div>
      <input
        value={inputValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChangeHandler}
        {...props}
      />
      <div
        className={'helper-text'}
      >
        {helperText}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * A short hint that describes the expected value
   */
  placeholder: PropTypes.string,

  /**
   * Label of the input
   */
  label: PropTypes.string,

  /**
   * Boolean if there's an error with the form
   */
  error: PropTypes.bool,

  /**
   * A hint to help user enter the expected value
   */
  helperText: PropTypes.string,

  /**
   * Boolean if the input is disabled
   */
  disabled: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: 'Placeholder',

  label: 'Label',

  error: false,

  helperText: '',

  disabled: false,
}