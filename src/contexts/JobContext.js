import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const Job = createContext();
export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);

    
    const values = { jobs, setJobs }
    return <Job.Provider value={values}>
        { children }
    </Job.Provider>
}

export const useJob = () => useContext(Job);

JobProvider.propTypes = {
    children: PropTypes.node
}