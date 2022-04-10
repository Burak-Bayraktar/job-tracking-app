import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

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
    async function fetchData() {
      const res = await axios.get("http://localhost:5000/priority", (response) => ({response}));
      setJobPriorities(res.data);
    }

    fetchData();
    getJobList();
  }, []);

  const getJobList = () => {
    if (jobList.length === 0) {
      const lsJobList = localStorage.getItem("job-list")
        ? JSON.parse(localStorage.getItem("job-list"))
        : [];

      setJobList(lsJobList);
      setFilteredJobList(lsJobList);
    }
  };

  const getJobListFromLocalStorage = () => {
    const currJobList = localStorage.getItem("job-list")
      ? JSON.parse(localStorage.getItem("job-list"))
      : [];
    return currJobList;
  };

  const createNewJob = (newJob) => {
    const newJobWithId = { id: uuidv4(), ...newJob };
    setJobList(() => [...jobList, newJobWithId]);

    const currJobList = getJobListFromLocalStorage();
    localStorage.setItem(
      "job-list",
      JSON.stringify([...currJobList, newJobWithId])
    );
  };

  const updateJobList = (jobToUpdate) => {
    const newJobList = [...jobList];
    const itemToDelete = newJobList.findIndex((i) => i.id === jobToUpdate.id);
    newJobList.splice(itemToDelete, 1, jobToUpdate);
    setJobList([...newJobList]);

    localStorage.removeItem("job-list");
    localStorage.setItem("job-list", JSON.stringify([...newJobList]));
  };

  const deleteJob = (jobToDelete) => {
    const newJobList = [...jobList];
    const itemToDelete = newJobList.findIndex((i) => i.id === jobToDelete);
    newJobList.splice(itemToDelete, 1);
    setJobList([...newJobList]);

    localStorage.removeItem("job-list");
    localStorage.setItem("job-list", JSON.stringify([...newJobList]));
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
