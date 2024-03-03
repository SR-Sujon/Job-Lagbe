import styled from "styled-components";
import Wrapper from "../assets//wrappers/LandingPage";
import main_office from "../assets/images/main_office.svg";
//import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Your <span>Reliable</span> <strong>Job</strong> <span>Tracker</span>
          </h1>
          <p>
            Welcome to Job Lagbe – Where Your Career Journey Begins!
            Effortlessly manage and track your job applications with our
            intuitive Job Tracking Platform. Stay organized, never miss a
            deadline, and take control of your career destiny. Start tracking,
            start succeeding!
            <br />
            Get started now!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main_office} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
