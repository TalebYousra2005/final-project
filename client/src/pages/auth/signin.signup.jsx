import { HomeLayout } from "../../components/layouts/home";
import { SignInForm } from "../../components/login";
import { SignUpForm } from "../../components/register";
import  cta  from "../../images/cta-bg.png";

const SigninSignupPage = () => {
  return (
    <HomeLayout>
      <div
        className="contain align-items-center justify-content-center form-container"
        style={{ backgroundImage: `url(${cta})` }}
      >
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-md-5 signin">
            <SignInForm />
          </div> */}
          <div className="col-md-6 offset-md-3 signup">
            <SignUpForm />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default SigninSignupPage;
