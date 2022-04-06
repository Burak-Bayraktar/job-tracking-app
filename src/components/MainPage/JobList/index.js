import React from "react";
import { useJob } from "../../../contexts/JobContext";
import JobItem from "../JobItem";
import "./style.scss";

const JobList = () => {
  const { jobList } = useJob();

  return (
    <div className="job-list">
      <div className="job-list__header">
        <div className="name">Name</div>
        <div className="priority">Priority</div>
        <div className="action">Action</div>
      </div>
      <div className="job-list__content">
        {
          jobList?.map((job) => {
            return <JobItem key={job.id} name={job.job} priority={job.priority.value} />
          })
        }
      </div>
    </div>
  );
};

export default JobList;
