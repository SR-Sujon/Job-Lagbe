import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Johnathan" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Smith"
        />
        <FormRow type="text" name="location" defaultValue="USA" />
        <FormRow type="email" name="email" defaultValue="johnathan@gmail.com" />
        <FormRow type="password" name="password" defaultValue="HoneyComb123%" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
