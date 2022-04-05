import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ inputType, placeholder, className }) => {
  return (
    <input 
      type={inputType}
      {...(placeholder && { placeholder })}
      {...(className && { className })}
    />
  )
}

export default Input

Input.propTypes = {
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}