import React, { useState } from "react";
import { useJob } from "../../../../../contexts/JobContext";
import Button from "../../../../shared/FormInput/Button";
import Input from "../../../../shared/FormInput/Input";
import Select from "../../../../shared/FormInput/Select";

const CreateJobForm = () => {
  const { jobPriorities, NewJobModal, createNewJob } = useJob();
  const [newJob, setNewJob] = useState(NewJobModal);

  const handleChange = (value, name) => {
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="create-new-job__form">
      <label className="form-input job-name">
        <span className="-inline-text">Job Name</span>
        <Input
          name="job"
          onChange={(e) => handleChange(e.target.value, e.target.name)}
          inputType="text"
        />
      </label>
      <label className="form-input job-priority">
        <span className="-inline-text">Job Priority</span>
        <Select
          name="priority"
          onChange={({ target }) =>
            handleChange(
              {
                id: target.selectedOptions[0].attributes["precedence"].value,
                value: target.value,
              },
              target.name
            )
          }
        >
          {jobPriorities?.map((item) => (
            <option precedence={item.orderOfPrecedence} key={item.id}>
              {item.title}
            </option>
          ))}
        </Select>
      </label>
      <Button
        className="form-input job-add-button"
        onClick={() => createNewJob(newJob)}
      >
        + Create
      </Button>
    </div>
  );
};

export default CreateJobForm;
