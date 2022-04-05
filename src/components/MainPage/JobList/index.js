import React from 'react'
import JobItem from '../JobItem'
import './style.scss'

const JobList = () => {
  return (
    <div className='job-list'>
      <div className='job-list__header'>
        <div className='name'>Name</div>
        <div className='priority'>Priority</div>
        <div className='action'>Action</div>
      </div>
      <div className='job-list__content'>
        <JobItem name='test' priority='Urgent' />
      </div>
    </div>
  )
}

export default JobList