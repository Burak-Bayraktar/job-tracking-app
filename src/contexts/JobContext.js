import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";

const NewJobModal = {
    job: '',
    priority: '',
} 

const Job = createContext();
export const JobProvider = ({ children }) => {
    
    const [jobPriorities, setJobPriorities] = useState([]);
    const [jobList, setJobList] = useState([]);
    
    useEffect(() => {
      async function fetchData() {
        const res = await axios.get(
          "http://localhost:5000/priority",
          (res) => {
            return res;
          }
        );
  
        setJobPriorities(res.data)
    }
    
        fetchData();
        getJobList();
    }, []);

    const getJobList = () => {
        if (jobList.length === 0) {
            const lsJobList = localStorage.getItem('job-list') ? JSON.parse(localStorage.getItem('job-list')): []
            setJobList(lsJobList)
        }
    }

    const createNewJob = (newJob) => {
        const newJobWithId = { id: uuidv4(), ...newJob };
        setJobList(() => [
          ...jobList, newJobWithId,
        ]);

        const currJobList = localStorage.getItem('job-list') ? JSON.parse(localStorage.getItem('job-list')) : [] 
        localStorage.setItem('job-list', JSON.stringify([...currJobList, newJobWithId]))
    };

    const values = { jobPriorities, setJobPriorities, jobList, setJobList, NewJobModal, createNewJob }
    return <Job.Provider value={values}>
        { children }
    </Job.Provider>
}

export const useJob = () => useContext(Job);

JobProvider.propTypes = {
    children: PropTypes.node
}