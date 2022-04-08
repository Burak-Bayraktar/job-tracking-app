import React, { useCallback, useEffect, useState } from "react";
import { useJob } from "../../../contexts/JobContext";
import Input from "../../shared/FormInput/Input";
import Select from "../../shared/FormInput/Select";
import "./style.scss";

const JobFilter = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    priorities: "",
  });

  const { jobList, setFilteredJobList, jobPriorities } = useJob();

  const filterBySearchTerm = useCallback((arr) => {
    return arr.filter((item) => {
      if (!filters.searchTerm) {
        return arr;
      }

      return item.job
        .toLowerCase()
        .includes(filters.searchTerm.toLowerCase()) && item.job;
    });
  }, [filters.searchTerm])

  const filterBySelectedOption = useCallback((arr) => {
    return arr?.filter((item) => {
      if (Object.keys(filters.priorities).length === 0 || filters.priorities.id === "0") {
        return arr;
      }

      return item.priority.id === filters.priorities.id && item;
    });
  }, [filters.priorities]) 

  useEffect(() => {
    const newList = [...jobList];
    const searchTermFiltered = filterBySearchTerm(newList) 
    const selectOptionFilter = filterBySelectedOption(searchTermFiltered)

    setFilteredJobList([...selectOptionFilter]);
  }, [filters, setFilteredJobList, jobList, filterBySearchTerm, filterBySelectedOption]);

  return (
    <div className="job-filter">
      <Input
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, searchTerm: e.target.value }))
        }
        className="job-filter-input"
        inputType="text"
        placeholder="Job Name"
      />
      <Select
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            priorities: {
              id: e.target.selectedOptions[0].getAttribute("precedence"),
              value: e.target.value,
            },
          }))
        }
      >
        <option precedence="0">Priority(All)</option>
        {jobPriorities?.map((item) => (
          <option precedence={item.orderOfPrecedence} key={item.id}>
            {item.title}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default JobFilter;
