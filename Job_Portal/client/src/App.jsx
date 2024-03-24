import { useEffect, useContext } from "react";
import "./App.css";
import { Context } from "./main";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import MyJobs from "./components/Job/MyJobs";
import PostJobs from "./components/Job/PostJob";
import Application from "./components/Application/Application";
import MyApplication from "./components/Application/MyApplication";
import NotFound from "./components/NotFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/getuser",
          { withCredentials: true }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/job/getall" element={<Jobs></Jobs>}></Route>
          <Route path="/job/:id" element={<JobDetails></JobDetails>}></Route>
          <Route path="/job/post" element={<PostJobs></PostJobs>}></Route>
          <Route path="/job/me" element={<MyJobs></MyJobs>}></Route>
          <Route
            path="/application/:id"
            element={<Application></Application>}
          ></Route>
          <Route
            path="/application/me"
            element={<MyApplication></MyApplication>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
        <Toaster></Toaster>
      </Router>
    </>
  );
};

export default App;
