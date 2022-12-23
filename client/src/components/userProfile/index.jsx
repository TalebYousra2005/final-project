import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { signupSchema } from "../../helper/form.validation";
import { updateOneUser } from "../../services/user.service";
import { successNotification,errorNotification } from "../../helper/notifications";

export const UserProfileForm = () => {
  const { currentUser } = useSelector((state) => state.user);
// console.log(currentUser)
  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = currentUser ? currentUser.firstName : "";
    defaultValues.author = currentUser ? currentUser.lastName : "";
    defaultValues.price = currentUser ? currentUser.userName : "";
    defaultValues.subject = currentUser ? currentUser.email : "";
    defaultValues.subject = currentUser ? currentUser.contact : "";
    defaultValues.subject = currentUser ? currentUser.studyFeild : "";

    reset({ ...defaultValues });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const { firstName, lastName, userName, password, contact, studyFeild } =
      data;
    updateOneUser(
      {
        id: currentUser._id,
        firstName,
        lastName,
        userName,
        password,
        contact,
        studyFeild,
      },
      dispatch,
      successNotification,
      errorNotification
    );
  };
  return (
    <div className="container">
      <h3>
        Welcome {currentUser.lastName}, here your account information, feel free
        to update
      </h3>
      <div className="row ">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group firstName">
            <label className="form-label ">First name</label>
            <input
              type="text"
              className="form-control "
              placeholder="Doe"
              // value={currentUser.firstName}
              {...register("firstName")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.firstName?.message}
            </h6>
          </div>

          <div className="form-group latName">
            <label className="form-label ">Last name</label>
            <input
              type="text"
              className="form-control "
              placeholder="John"
              // value={currentUser.lastName}
              {...register("lastName")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.lastName?.message}
            </h6>
          </div>

          <div className="form-group userName">
            <label className="form-label ">Username</label>
            <input
              type="text"
              className="form-control "
              placeholder="userName"
              // value={currentUser.userName}
              {...register("userName")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.userName?.message}
            </h6>
          </div>

          <div className="form-group mail">
            <label className="form-label ">Email</label>
            <input
              type="email"
              className="form-control "
              placeholder="you@example.com"
              // value={currentUser.email}
              {...register("email")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.email?.message}
            </h6>
          </div>

          <div className="form-group contact">
            <label className="form-label ">Phon number</label>
            <input
              type="text"
              className="form-control "
              placeholder="+213 0. .. .. .. .."
              // value={currentUser.contact}
              {...register("contact")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.contat?.message}
            </h6>
          </div>

          <div className="form-group contact">
            <label className="form-label ">study feild</label>
            {/* <input
              type="text"
              className="form-control "
              // value={currentUser.contact}
              {...register("contact")}
            > */}
            <div className="custom-select form-control ">
              <select {...register("studyFeild")}>
                <option value={0}>Select an option:</option>
                <option value={1}>Medcine</option>
                <option value={2}>Pharmacy</option>
                <option value={3}>Dentaire</option>
                <option value={4}>Vétérinaire</option>
                <option value={5}>Computer science(informatique)</option>
                <option value={6}></option>
                <option value={7}></option>
                <option value={8}></option>
                <option value={9}></option>
                <option value={10}></option>
                <option value={11}></option>
                <option value={12}></option>
              </select>
              <p className="text-danger">{errors.studyFeild?.message}</p>
            </div>
            {/* </input> */}
            <h6 className="text-danger mt-2 fw-normal">
              {errors.contat?.message}
            </h6>
          </div>

          <div className="form-group password">
            <label className="form-label ">Password</label>
            <input
              type="text"
              className="form-control "
              placeholder="your current password"
            />
            <input
              type="text"
              className="form-control  mt-3"
              placeholder="your new password"
              {...register("password")}
            />
            <h6 className="text-danger mt-2 fw-normal">
              {errors.password?.message}
            </h6>
          </div>
          <button className="btn btn-warning">Save changes</button>
        </form>
      </div>
    </div>
  );
};
