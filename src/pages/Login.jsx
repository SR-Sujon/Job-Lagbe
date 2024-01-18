import { Link } from "react-router-dom";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="jonathan@gmail.com" />
        <FormRow type="password" name="password" defaultValue="HoneyComb123%" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>Not a member yet?
          <Link to='/register' className="member-btn">Register!</Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
