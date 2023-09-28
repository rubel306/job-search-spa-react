import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetails.css";
const JobDetails = () => {
  const { id } = useParams();
  const allJobDetails = useLoaderData();
  const jobDetails = allJobDetails.find((jd) => jd.id === parseInt(id));
  console.log(jobDetails);
  return (
    <div>
      <div className="job-details-header">
        <div className="container">
          <h2>Job details</h2>
        </div>
      </div>
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
            <button className="btn">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
