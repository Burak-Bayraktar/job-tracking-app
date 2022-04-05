import React from 'react'
import Input from '../../shared/FormInput/Input'
import Select from '../../shared/FormInput/Select'
import './style.scss'

const JobFilter = () => {
  return (
    <div className='job-filter'>
        <Input className='job-filter-input' inputType="text" placeholder='Job Name' />
        <Select options={["Priority (All)","Urgent", "Regular", "Trivial"]}/>
    </div>
  )
}

export default JobFilter