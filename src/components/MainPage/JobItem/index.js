import React from 'react'
import Label from '../../shared/FormInput/Label'
import PropTypes from 'prop-types'
import Button from '../../shared/FormInput/Button'

const JobItem = ({ id, name, priority, setShowEditModal, setShowDeleteModal, setSelectedItem }) => {
  const updateItem = (id, name, priority) => {
    setSelectedItem(() => ({
      id: id,
      job: name,
      priority: {
        id: priority.id,
        value:priority.value
      }}))

    setShowEditModal(true)
  }
  
  const deleteItem = (id, name, priority) => {
    setSelectedItem(() => ({
      id: id,
      job: name,
      priority: {
        id: priority.id,
        value:priority.value
      }}))

    setShowDeleteModal(true)
  }

  return (
    <div id={id} className='job-list__item'>
        <div className='column__name'>{ name }</div>
        <div className='column__priority' priority-id={priority.id}>
          <Label content={priority.value} className={`label-${priority.value.toLowerCase()}`} />
        </div>
        <div className='column__action'>
          <Button onClick={() => updateItem(id, name, priority)} text='Edit' />
          <Button onClick={() => deleteItem(id, name, priority)} text='Delete' />
        </div>
    </div>

  )
}

JobItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  priority: PropTypes.object,
  setShowEditModal: PropTypes.func,
  setShowDeleteModal: PropTypes.func,
  setSelectedItem: PropTypes.func
}

export default JobItem