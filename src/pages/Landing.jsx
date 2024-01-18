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
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
            dignissimos incidunt sint quidem illo, culpa deserunt magnam ut
            voluptate perspiciatis quae iusto? Aliquid asperiores exercitationem
            architecto consequatur! Earum, sapiente eum!
          </p>
          <Link to="/register" className="btn register-link">
          Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main_office} alt="Job Hunt" className="img main-img"/>        
      </div>
    </Wrapper>
  );
};

export default Landing;
