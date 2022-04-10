/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { SortByNumber } from "../utils";
import { FindIndexTheItem, GetJobListFromLocalStorage, SetNewArrayToLocalStorage } from "./helpers/JobContextHelpers";
import { axiosInstance } from "../axiosInstance";

const NewJobModal = {
  job: "",
  priority: {
    id: "",
    value: "",
  },
};

const Job = createContext();
export const JobProvider = ({ children }) => {
  const [jobPriorities, setJobPriorities] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: "",
    priorities: "",
  });

  useEffect(() => {
    async function fetchPriorities() {
      const res = await axiosInstance.get('/priority', (res) => ({res}))
      setJobPriorities(res.data);
    }

    fetchPriorities();

    let lsJobList = GetJobListFromLocalStorage(jobList);
    lsJobList = SortByNumber(lsJobList, 'desc')
    setJobList(lsJobList);
    setFilteredJobList(lsJobList);
  }, []);

  const createNewJob = (newJob) => {
    const newJobWithId = { id: uuidv4(), ...newJob };
    setJobList(() => [...jobList, newJobWithId]);

    const currJobList = GetJobListFromLocalStorage(jobList);
    localStorage.setItem("job-list", JSON.stringify([...currJobList, newJobWithId])
    );
  };

  const updateJobList = (jobToUpdate) => {
    const { itemToDelete, newJobList } = FindIndexTheItem(jobList, jobToUpdate)

    newJobList.splice(itemToDelete, 1, jobToUpdate);
    setJobList([...newJobList]);

    SetNewArrayToLocalStorage(newJobList)
  };

  const deleteJob = (jobToDelete) => {
    const { itemToDelete, newJobList } = FindIndexTheItem(jobList, jobToDelete)

    newJobList.splice(itemToDelete, 1);
    setJobList([...newJobList]);

    SetNewArrayToLocalStorage(newJobList)
  };

  const values = {
    filteredJobList,
    setFilteredJobList,
    jobPriorities,
    setJobPriorities,
    jobList,
    setJobList,
    NewJobModal,
    createNewJob,
    updateJobList,
    deleteJob,
    filters,
    setFilters
  };
  return <Job.Provider value={values}>{children}</Job.Provider>;
};

export const useJob = () => useContext(Job);

JobProvider.propTypes = {
  children: PropTypes.node,
};
