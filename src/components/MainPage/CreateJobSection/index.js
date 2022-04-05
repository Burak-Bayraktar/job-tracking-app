import React from 'react'
import CreateJobForm from './components/CreateJobForm'
import './style.scss'

const CreateJobSection = () => {
  return (
    <div className='create-new-job'>
        <div className='create-new-job__title'>
            Create New Job
        </div>
        <div className="create-new-job__content">
            <CreateJobForm />
        </div>
    </div>
  )
}

export default CreateJobSection