import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { Context } from "../../main";
import Axios from "axios";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigate = useNavigate();

  const { isAuthorized, user } = useContext(Context);
  useEffect(() => {
    Axios.get(`http://localhost:4000/api/v1/job/${id}`, {
      withCredentials: true,
    })
      .then((res) => {
        // console.log(res.data.job);
        setJob(res.data.job);
      })
      .catch((err) => console.log(err));
  }, []);
  if(!isAuthorized){
    navigate("/login")
  }
  return (
    <>
      <div className="jobDetail">
        <div className="container">
          <h3>Job Details</h3>
          <div className="banner">
            <p>
              Title: <span>{job.title}</span>
            </p>
            <p>
              Category: <span>{job.category}</span>
            </p>
            <p>
              Country: <span>{job.country}</span>
            </p>
            <p>
              City: <span>{job.city}</span>
            </p>
            <p>
              Location: <span>{job.description}</span>
            </p>
            <p>
              Description: <span>{job.description}</span>
            </p>
            <p>
              Job Posted On: <span>{job.jobPostedOn}</span>
            </p>
            <p>
              Salary:{" "}
              {job.fixedSalary ? (
                <span>{job.fixedSalary}</span>
              ) : (
                <span>
                  {job.salaryFrom} - {job.salaryTo}
                </span>
              )}
            </p>
            {user && user.role === "Employer" ? (
              <></>
            ) : (
              <Link to={`/application/${job._id}`}>Apply Now</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
