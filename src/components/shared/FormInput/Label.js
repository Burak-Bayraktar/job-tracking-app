import React from 'react'
import PropTypes from 'prop-types'
import './label.scss'

const Label = ({ className, content }) => {
    let labelClass = className;

    if(Array.isArray(className)) {
        labelClass = className.join(' ')    
    }
    
  return (
    <div className={`label ${labelClass}`}>
        { content }
    </div>
  )
}

Label.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
}
export default Label