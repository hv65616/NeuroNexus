import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <>
      <footer className={isAuthorized ? "footerShow" : "footerHide"}></footer>
      <div>&copy; All Right Reserver By Himanshu Verma</div>
      <div>
        <Link to={"/"} target="_blank">
          <FaFacebookF></FaFacebookF>
        </Link>
        <Link to={"/"} target="_blank">
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link to={"/"} target="_blank">
          <RiInstagramFill></RiInstagramFill>
        </Link>
      </div>
    </>
  );
};

export default Footer;
