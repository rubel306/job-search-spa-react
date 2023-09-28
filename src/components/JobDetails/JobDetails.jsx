import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
import JobDetailsHeader from "../JobDetailsHeader/JobDetailsHeader";
const JobDetails = () => {
  const { id } = useParams();
  const allJobDetails = useLoaderData();
  const jobDetails = allJobDetails.find((jd) => jd.id === parseInt(id));

  const applyBtn = (id) => {
    let appliedJob = {};
    //get the job from the local storage
    const storedJob = localStorage.getItem("applied-job");
    if (storedJob) {
      appliedJob = JSON.parse(storedJob);
    }
    //check quantity
    const quantity = appliedJob[id];

    if (!quantity) {
      appliedJob[id] = 1;
    } else {
      const newQuantity = quantity + 1;
      appliedJob[id] = newQuantity;
    }
    localStorage.setItem("applied-job", JSON.stringify(appliedJob));
  };

  return (
    <div>
      <JobDetailsHeader>Job details</JobDetailsHeader>
      <div className="container">
        <div className=" job-details">
          <div className="job-details-summery">
            <p>
              <b>Job Description: </b>
              {jobDetails.job_description}
            </p>
            <p>
              <b>Job Responsibility: </b>
              {jobDetails.job_responsibility}
            </p>
            <p>
              <b>Educational Requirements: </b>
              {jobDetails.educational_requirements}
            </p>
            <p>
              <b>Experiences: </b>
              {jobDetails.experiences}
            </p>
          </div>
          <div className="job-details-right">
            <div className="job-details-box">
              <h2>Job Details</h2>
              <p>
                <b>Salary:</b> {jobDetails.salary}
              </p>
              <p>
                <b>Salary:</b> {jobDetails.job_title}
              </p>
              <h2>Contact Information</h2>
              <p>
                <b>Phone:</b> {jobDetails.contact_information.phone}
              </p>
              <p>
                <b>Email:</b> {jobDetails.contact_information.email}
              </p>
              <p>
                <b>Address:</b> {jobDetails.contact_information.address}
              </p>
            </div>
            <button onClick={() => applyBtn(id)} className="btn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
