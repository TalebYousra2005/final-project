import { UserPageLayout } from "../../components/layouts/user";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { signupSchema } from "../../helper/form.validation";
import { updateOneUser } from "../../services/user.service";

export const UserProfileForm = () => {
  const user = useSelector((state) => state.user);
  const { data, loading, error } = useFetch(`/users/${user._id}`);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = data ? data.data.firstName : "";
    defaultValues.author = data ? data.data.lastName : "";
    defaultValues.price = data ? data.data.userName : "";
    defaultValues.subject = data ? data.data.email : "";

    reset({ ...defaultValues });
  }, [data]);
  const dispatch = useDispatch();
  const handleFormSubmit = (data) => {
    console.log(data);
    // login
    const { firstName, lastName, userName, studyFeild } = data;
    updateOneUser(
      { id: currentUser._id, firstName, lastName, userName, studyFeild },
      dispatch,
      successNotification,
      errorNotification
    );
  };
  return (
    <h1>
      <div className="container">
        <div className="row col-md-10 offset-md-1">
          <h5>
            Welcome {user.lastName}, here your account information, feel free to
            update
          </h5>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group">
              <label className="form-label">First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Doe"
                value={user.firstName}
                {...register("firstName")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John"
                value={user.lastName}
                {...register("lastName")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="userName"
                value={user.userName}
                {...register("userName")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={user.email}
                {...register("email")}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="your current password"
              />
              <input
                type="text"
                className="form-control mt-3"
                placeholder="your new password"
                {...register("password")}
              />
            </div>
            <button className="btn btn-warning">Save changes</button>
          </form>
        </div>
      </div>
    </h1>
  );
};
