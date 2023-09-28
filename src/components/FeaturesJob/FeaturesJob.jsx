import { useLoaderData } from "react-router-dom";
import FeatureJob from "../FeatureJob/FeatureJob";
import { useEffect, useState } from "react";

const FeaturesJob = () => {
  const featureJobs = useLoaderData();
  const [featJobs, setFeatJobs] = useState([]);

  useEffect(() => {
    const showFirst4 = featureJobs.slice(0, 4);
    setFeatJobs(showFirst4);
  }, [featureJobs]);

  const showAll = () => {
    setFeatJobs(featureJobs);
  };

  return (
    <div className="features-job">
      {featJobs.map((fj) => (
        <FeatureJob key={fj.id} fj={fj}></FeatureJob>
      ))}
      <button onClick={showAll}>Show All </button>
    </div>
  );
};

export default FeaturesJob;
