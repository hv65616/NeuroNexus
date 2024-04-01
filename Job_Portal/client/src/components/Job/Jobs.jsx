import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      Axios.get("http://localhost:4000/api/v1/job/getall", {
        withCredentials: true,
      }).then((res) => {
        setJobs(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  });
  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <>
      <section className="jobs page">
        <div className="container">
          <h1>All Available Jobs</h1>
          <div className="banner">
            {jobs.jobs &&
              jobs.jobs.map((ele) => {
                return (
                  <div className="card" key={ele._id}>
                    <p>{ele.title}</p>
                    <p>{ele.category}</p>
                    <p>{ele.city}</p>
                    <Link to={`/job/${ele._id}`}>Job Details</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
