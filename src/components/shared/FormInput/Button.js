import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ className, onClick, text }) => {
  const classNames = (className) => {
    if (Array.isArray(className)) {
      return className.join('')
    }

    return className
  }
  return (
    <button
      className={`button ${className ? classNames(className) : ''}`}
      {...(onClick && { onClick })}
    >
      { text }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
}

export default Button