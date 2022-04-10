import React from "react";
import { Modal } from "..";
import Input from "../../../shared/FormInput/Input";
import Button from "../../../shared/FormInput/Button";
import "./style.scss";
import Select from "../../FormInput/Select";
import { useJob } from "../../../../contexts/JobContext";
import PropTypes from "prop-types";

const EditModal = ({
  updateJob,
  show,
  setShow,
  selectedItem,
  setSelectedItem,
}) => {
  const { jobPriorities } = useJob();

  const handleChange = (e) => {
    setSelectedItem((prev) => ({
      ...prev,
      priority: {
        id: e.target.selectedOptions[0].id,
        value: e.target.value,
      },
    }));
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <div className="title">Job Edit</div>
      </Modal.Header>
      <Modal.Body>
        <div className="edit-modal">
          <div className="form-input">
            <span className="title">Job Name</span>
            <Input
              disabled={true}
              inputType="text"
              name="job-name"
              placeholder={selectedItem.job}
            />
          </div>
          <div className="form-input">
            <span className="title">Job Priority</span>
            <Select
              onChange={(e) => handleChange(e)}
              value={selectedItem.priority.value}
              name="job-priority"
            >
              {jobPriorities?.map((item) => (
                <option id={item.id} key={item.id}>
                  {item.title}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="buttons">
          <Button
            content="Cancel"
            className="cancel-button"
            onClick={() => setShow(false)}
          />
          <Button 
            content="Save" 
            onClick={() => {
              updateJob(selectedItem)
              setShow(false)
            }} 
            className="save-button" 
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

EditModal.propTypes = {
  updateJob: PropTypes.func,
  setShow: PropTypes.func,
  setSelectedItem: PropTypes.func,
  selectedItem: PropTypes.object,
  show: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
export default EditModal;
