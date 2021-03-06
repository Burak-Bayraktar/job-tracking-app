/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useJob } from "../../../contexts/JobContext";
import { GetFilteredAndSortedJobList, SortByNumber, SortByString } from "../../../utils";
import DeleteModal from "../../shared/Modal/DeleteModal";
import EditModal from "../../shared/Modal/EditModal";
import JobItem from "../JobItem";
import { ReactComponent as AscendingIcon } from '../../../assets/svg/SortAscending.svg'
import { ReactComponent as DescendingIcon } from '../../../assets/svg/SortDescending.svg'
import "./style.scss";

const JobList = () => {
  const { NewJobModal, updateJobList, deleteJob, filteredJobList, setFilteredJobList, filters, jobList } = useJob();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(NewJobModal);
  const [nameSortType, setNameSortType] = useState('asc');
  const [prioritySortType, setPrioritySortType] = useState('desc');
  const [currentSort, setCurrentSort] = useState({ name: '', priority: 'desc' })

  useEffect(() => {
    const newList = GetFilteredAndSortedJobList(jobList, filters, currentSort, setFilteredJobList)
    setFilteredJobList([...newList])
  }, [currentSort.name, currentSort.priority, filters.priorities, filters.searchTerm, jobList, setFilteredJobList])

  const updateJob = (itemToUpdate) => {
    updateJobList(itemToUpdate)
  };

  const deleteJobItem = (jobToDelete) => {
    deleteJob(jobToDelete)
  }
  
  const setSortType = (prev) => {
    return prev === 'asc' ? 'desc' : 'asc'
  }

  const sortNameList = (arr) => {
    const sortedList = SortByString(arr, 'job', nameSortType)
    setNameSortType((prev) => setSortType(prev))
    setCurrentSort({ priority: '', name: nameSortType})
    setFilteredJobList([...sortedList])
  }

  const sortPriorityList = (arr) => {
    const sortedList = SortByNumber(arr, prioritySortType)
    setPrioritySortType(prev => setSortType(prev))
    setCurrentSort({ priority: prioritySortType, name: ''})
    setFilteredJobList([...sortedList])
  }

  return (
    <>
      <div className="job-list">
        <div className="job-list__header">
          <div onClick={() => sortNameList(filteredJobList)} className="name">
            Name 
            {
              nameSortType === 'asc' ? <AscendingIcon /> : <DescendingIcon />
            }
          </div>
          <div onClick={() => sortPriorityList(filteredJobList)} className="priority">
            Priority
            {
              prioritySortType === 'asc' ? <AscendingIcon /> : <DescendingIcon />
            }
          </div>
          <div className="action">Action</div>
        </div>
        <div className="job-list__content">
          {filteredJobList?.map((job) => {
            return (
              <JobItem
                key={job.id}
                name={job.job}
                id={job.id}
                jobList={filteredJobList}
                sortList={sortNameList}
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
