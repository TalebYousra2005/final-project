// import RecipeReviewCard from "../components/product-card/index";
import { HomeLayout } from "../components/layouts/home";
// todo Set the send message function
const ContactPage = () => {
  return (
    <HomeLayout>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1 className="text-center contact">Contact us</h1>
            <form>
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control email"
                  placeholder="you.example@gmail.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control message"
                  placeholder="enter your message . . . ."
                />
              </div>
              <button className="btn m-2 btn-warning">Send</button>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactPage;
