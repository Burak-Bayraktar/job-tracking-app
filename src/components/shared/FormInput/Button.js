import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ className, onClick, content }) => {
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
      { content }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired, PropTypes.number.isRequired])
}

export default Button