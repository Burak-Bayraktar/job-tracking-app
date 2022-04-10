import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ inputType, placeholder, className, onChange, onKeyDown, name, disabled, value }) => {
  return (
    <input 
      type={inputType}
      {...(onChange && { onChange })}
      {...(onKeyDown && { onKeyDown })}
      {...(placeholder && { placeholder })}
      {...(className && { className })}
      {...(name && { name })}
      {...(disabled && { disabled })}
      {...(value && { value })}
    />
  )
}

export default Input

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: PropTypes.string
}