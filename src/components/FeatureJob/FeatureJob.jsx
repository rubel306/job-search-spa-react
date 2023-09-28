import "./featureJob.css";
import { Link, useNavigate } from "react-router-dom";
const FeatureJob = ({ fj }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    job_type,
    remote_or_onsite,
    salary,
    location,
  } = fj;

  const navigate = useNavigate();
  const clickJobDetails = (id) => {
    navigate(`/job/${id}`);
  };
  return (
    <div className="feature-job">
      <img src={logo} alt={company_name} />
      <h3>{job_title}</h3>
      <p>{company_name}</p>
      <button className="sm-btn">{remote_or_onsite}</button>
      <button className="sm-btn">{job_type}</button>
      <div className="flex">
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button onClick={() => clickJobDetails(id)} className="btn">
        <Link to={`/job/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default FeatureJob;
