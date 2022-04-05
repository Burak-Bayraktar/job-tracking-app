import React from "react";
import Input from "../../../../shared/FormInput/Input";
import Select from "../../../../shared/FormInput/Select";

const CreateJobForm = () => {
  return (
    <div className="create-new-job__form">
        <label className="form-input job-name">
          <span className="-inline-text">Job Name</span>
          <Input inputType="text" />
        </label>
        <label className="form-input job-priority">
          <span className="-inline-text">Job Priority</span>
          <Select options={["Urgent", "Regular", "Trivial"]} />
        </label>
        <button className="form-input job-add-button">+ Create</button>
    </div>
  );
};

export default CreateJobForm;
