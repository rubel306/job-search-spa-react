import { useEffect, useState } from "react";
import "./Home.css";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";
import FeatureJob from "../FeatureJob/FeatureJob";
const Home = () => {
  const featureCats = useLoaderData();
  const categoriesData = featureCats.categories;
  const jobsData = featureCats.jobs;

  const [featJobs, setFeatJobs] = useState([]);

  useEffect(() => {
    const showFirst4 = jobsData.slice(0, 4);
    setFeatJobs(showFirst4);
  }, [jobsData]);

  const showAll = () => {
    setFeatJobs(jobsData);
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container hero-area">
          <div className="hero-info">
            <h2>
              One Step <br /> Closer To Your <br />
              <span className="colored-text"> Dream Job</span>
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="hero-img">
            <img src="/public/images/user.png" alt="" />
          </div>
        </div>
      </div>

      {/* category section start */}

      <div className="category-section">
        <div className="container">
          <SectionTitle>
            {[
              "Job Category List",
              "Explore thousands of job opportunities with all the information you need. Its your future",
            ]}
          </SectionTitle>
          <div className="categories-area">
            {categoriesData.map((fc) => (
              <Category key={fc.id} fc={fc}></Category>
            ))}
            {/* <Category
              icon="/public/icons/accounts.png"
              title="Account & Finance"
              subtitle="300 Jobs Available"
            /> */}
          </div>
        </div>
      </div>
      {/* category section end  */}

      {/* featured job section start  */}

      <div className="featured-job-area">
        <div className="container">
          <SectionTitle>
            {[
              "Featured Jobs",
              "Explore thousands of job opportunities with all the information you need. Its your future",
            ]}
          </SectionTitle>
          <div className="features-job">
            {featJobs.map((fj) => (
              <FeatureJob featJobs={featJobs} key={fj.id} fj={fj}></FeatureJob>
            ))}
          </div>
          <div className="center">
            <button className="btn" onClick={showAll}>
              Show All
            </button>
          </div>
        </div>
      </div>

      {/* featured job section end */}
    </div>
  );
};

export default Home;
