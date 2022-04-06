import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ className, onClick }) => {
  return (
    <button
      {...(className && { className })}
      {...(onClick && { onClick })}
    >
      + Create
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button