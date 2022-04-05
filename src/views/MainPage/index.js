import React from "react";
import CreateJobSection from "../../components/MainPage/CreateJobSection";
import JobFilter from "../../components/MainPage/JobFilter";
import JobList from "../../components/MainPage/JobList";
import "../../components/MainPage/style.scss";

const MainPage = () => {
  return (
    <section className="main-page">
      <CreateJobSection />

      <div className="job-container">
        <span className="title">Job List</span>
        <div className="job-inner-container">
          <JobFilter />
          <JobList />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
