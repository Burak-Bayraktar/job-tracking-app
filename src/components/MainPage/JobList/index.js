import React, { useState } from "react";
import { useJob } from "../../../contexts/JobContext";
import DeleteModal from "../../shared/Modal/DeleteModal";
import EditModal from "../../shared/Modal/EditModal";
import JobItem from "../JobItem";
import "./style.scss";

const JobList = () => {
  const { NewJobModal, updateJobList, deleteJob, filteredJobList } = useJob();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(NewJobModal);

  const updateJob = (itemToUpdate) => {
    updateJobList(itemToUpdate)
  };

  const deleteJobItem = (jobToDelete) => {
    deleteJob(jobToDelete.id)
  }

  return (
    <>
      <div className="job-list">
        <div className="job-list__header">
          <div className="name">Name</div>
          <div className="priority">Priority</div>
          <div className="action">Action</div>
        </div>
        <div className="job-list__content">
          {filteredJobList?.map((job) => {
            return (
              <JobItem
                key={job.id}
                name={job.job}
                id={job.id}
                priority={{ value: job.priority.value, id: job.priority.id }}
                setShowEditModal={setShowEditModal}
                setShowDeleteModal={setShowDeleteModal}
                setSelectedItem={setSelectedItem}
              />
            );
          })}
        </div>
      </div>

      <EditModal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        show={showEditModal}
        setShow={setShowEditModal}
        updateJob={updateJob}
      />
      <DeleteModal show={showDeleteModal} selectedItem={selectedItem} setShow={setShowDeleteModal} deleteItem={deleteJobItem} />
    </>
  );
};

export default JobList;
