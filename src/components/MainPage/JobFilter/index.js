import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Input from '../../shared/FormInput/Input'
import Select from '../../shared/FormInput/Select'
import './style.scss'

const JobFilter = () => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "http://localhost:5000/priority",
        (res) => {
          return res;
        }
      );

      setPriorities([...res.data])
    }

    fetchData();
  }, []);

  return (
    <div className='job-filter'>
        <Input className='job-filter-input' inputType="text" placeholder='Job Name' />
        <Select>
          <option precedence="0">Priority(All)</option>
          {
            priorities.map(item => <option precedence={item.orderOfPrecedence} key={item.id}>{item.title}</option>)
          }
        </Select>
    </div>
  )
}

export default JobFilter