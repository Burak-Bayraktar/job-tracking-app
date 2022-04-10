import React, { useState, useEffect } from "react";
import { useJob } from "../../../../../contexts/JobContext";
import Button from "../../../../shared/FormInput/Button";
import FormElement from "../../../../shared/FormInput/FormElement";
import Input from "../../../../shared/FormInput/Input";
import Select from "../../../../shared/FormInput/Select";

const CreateJobForm = () => {
  const { jobPriorities, NewJobModal, createNewJob } = useJob();
  const [newJob, setNewJob] = useState(NewJobModal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted === true) {
      createNewJob(newJob)
    }
  }, [formErrors])
  
  const handleChange = (value, name) => {
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validation = (newJob) => {
    let errors = {}

    if (!newJob.job) {
      errors.job = "Job is required!"  
    } else if (newJob.job.length > 255) {
      errors.job = "Job can't bigger than 255."
    }

    if (!newJob.priority.id || !newJob.priority.value) {
      errors.priority = "Priority is required";
    }

    return errors;
  }

  const submitForm = (newJob) => {
    setFormErrors(validation(newJob));
    setIsSubmitted(true);
  }

  return (
    <div className="create-new-job__form">
      <div className="create-new-job__form-values">
        <FormElement className="job-name" formErrors={formErrors?.job} title={"Job Name"}>
          <Input
            name="job"
            onChange={(e) => handleChange(e.target.value, e.target.name)}
            inputType="text"
          />
        </FormElement>
        <FormElement className="job-priority" formErrors={formErrors?.priority} title="Job Priority">
          <Select
              name="priority"
              defaultValue={"Select One"}
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
              <option disabled>
                Select One
              </option>
              {jobPriorities?.map((item) => (
                <option precedence={item.orderOfPrecedence} value={item.title} key={item.id}>
                  {item.title}
                </option>
              ))}
          </Select>
        </FormElement>
      </div>
      <Button
        className="form-input job-add-button"
        onClick={() => submitForm(newJob)}
        content="+ Create"
      />
    </div>
  );
};

export default CreateJobForm;
