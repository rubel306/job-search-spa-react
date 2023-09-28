import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import NotFound from "./components/404/NotFound.jsx";
import Home from "./components/Home/Home.jsx";
import FeaturesJob from "./components/FeaturesJob/FeaturesJob.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          try {
            const categoriesResponse = await fetch("categories.json");
            const jobsResponse = await fetch("jobs.json");

            if (!categoriesResponse.ok || !jobsResponse.ok) {
              throw new Error("Failed to fetch data");
            }

            const categoriesData = await categoriesResponse.json();
            const jobsData = await jobsResponse.json();

            return {
              categories: categoriesData,
              jobs: jobsData,
            };
          } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
          }
        },
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("jobs.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
