export const SortByString = (arr, property, sortType, locale = "tr-TR") => {
  return arr?.sort((a, b) => {
    return (sortType === "asc" ? b : a)[property].localeCompare(
      (sortType === "asc" ? a : b)[property],
      locale
    );
  });
};

export const SortByNumber = (arr, sortType) => {
  if (sortType === "desc") {
    return arr?.sort((a, b) => a.priority.id - b.priority.id);
  }

  if (sortType === "asc") {
    return arr?.sort((a, b) => b.priority.id - a.priority.id);
  }
};

export const FilterBySearchTerm = (arr, searchTerm) => {
  return arr.filter((item) => {
    if (!searchTerm) {
      return arr;
    }

    return (
      item.job.toLowerCase().includes(searchTerm.toLowerCase()) && item.job
    );
  });
};

export const FilterByPriority = (arr, priorities) => {
  return arr?.filter((item) => {
    if (Object.keys(priorities).length === 0 || priorities.id === "0") {
      return arr;
    }

    return item.priority.id === priorities.id && item;
  });
};

export const GetFilteredAndSortedJobList = (jobList, filters, currentSort, setFilteredJobList) => {
  let updatedList = [];

  if (filters.searchTerm) {
    updatedList = FilterBySearchTerm(jobList, filters.searchTerm);
    
    if (!updatedList.length) {
      return updatedList;
    }
  }

  if (filters.priorities.id) {
    updatedList = FilterByPriority(updatedList.length ? updatedList : jobList, filters.priorities);

    if (!updatedList.length) {
      return updatedList;
    }
  }

  if (currentSort.name) {
    updatedList = SortByString(updatedList.length ? updatedList : jobList, "job", currentSort.name);
  }

  if (currentSort.priority) {
    updatedList = SortByNumber(updatedList.length ? updatedList : jobList, currentSort.priority);
  }
  
  const newList = updatedList.length ? updatedList : jobList;
  return newList;
};
