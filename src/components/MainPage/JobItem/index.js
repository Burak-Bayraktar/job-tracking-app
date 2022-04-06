import React from 'react'
import Label from '../../shared/FormInput/Label'
import PropTypes from 'prop-types'

const JobItem = ({ name, priority }) => {
  return (
    <div className='job-list__item'>
        <div className='column__name'>{ name }</div>
        <div className='column__priority'>
          <Label content={priority} className={`label-${priority.toLowerCase()}`} />
        </div>
        <div className='column__action'>
          <button>E</button>
          <button>D</button>
        </div>
    </div>
  )
}

JobItem.propTypes = {
  name: PropTypes.string,
  priority: PropTypes.string
}

export default JobItem