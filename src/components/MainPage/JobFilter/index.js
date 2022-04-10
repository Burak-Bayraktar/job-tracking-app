import React, { useCallback, useEffect } from "react";
import { useJob } from "../../../contexts/JobContext";
import { FilterByPriority, FilterBySearchTerm } from "../../../utils";
import Input from "../../shared/FormInput/Input";
import Select from "../../shared/FormInput/Select";
import "./style.scss";

const JobFilter = () => {
  const { jobList, setFilteredJobList, jobPriorities, filters, setFilters } = useJob();

  const filterBySearchTerm = useCallback((arr) => {
    return FilterBySearchTerm(arr, filters.searchTerm)
  }, [filters.searchTerm])

  const filterBySelectedOption = useCallback((arr) => {
    return FilterByPriority(arr, filters.priorities)
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
