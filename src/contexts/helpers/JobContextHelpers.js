export const FindIndexTheItem = (jobList, jobToFind) => {
    const newJobList = [...jobList];
    const itemToDelete = newJobList.findIndex((i) => i.id === jobToFind.id);
    return {itemToDelete, newJobList}
}

export const SetNewArrayToLocalStorage = (jobList) => {
    localStorage.removeItem("job-list");
    localStorage.setItem("job-list", JSON.stringify([...jobList]));
}

export const GetJobListFromLocalStorage = (jobList) => {
    if (jobList.length === 0) {
      let lsJobList = localStorage.getItem("job-list")
        ? JSON.parse(localStorage.getItem("job-list"))
        : [];

        return lsJobList;
    }

    return jobList
  };