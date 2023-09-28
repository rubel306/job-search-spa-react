import React, { useEffect, useState } from "react";
import "./AppliedJobs.css";
import JobDetailsHeader from "../JobDetailsHeader/JobDetailsHeader";
import FeatureJob from "../FeatureJob/FeatureJob";
import { useLoaderData } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [savedJobs, setSavedJobs] = useState([]);
  useEffect(() => {
    let appliedJobs = {};
    //get the data from the localDb
    const storedJob = localStorage.getItem("applied-job");
    if (storedJob) {
      appliedJobs = JSON.parse(storedJob);
    }

    //get the id from the applied jobs from the localStorageDb
    let savedJobs = [];
    for (const id in appliedJobs) {
      console.log("applied job id", id);
      const saveJob = jobs.find((job) => job.id === parseInt(id));
      savedJobs.push(saveJob);
    }
    setSavedJobs(savedJobs);
  }, [jobs]);

  return (
    <div>
      <JobDetailsHeader>Applied Jobs</JobDetailsHeader>

      <div className="container">
        <div className="applied-jobs">
          {savedJobs.map((fj) => (
            <FeatureJob key={fj.id} fj={fj}></FeatureJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
