import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ inputType, placeholder, className, onChange, name, disabled }) => {
  return (
    <input 
      type={inputType}
      {...(onChange && { onChange })}
      {...(placeholder && { placeholder })}
      {...(className && { className })}
      {...(name && { name })}
      {...(disabled && { disabled })}
    />
  )
}

export default Input

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}