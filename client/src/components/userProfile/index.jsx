import { UserPageLayout } from "../../components/layouts/user";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { signupSchema } from "../../helper/form.validation";
import { updateOneUser } from "../../services/user.service";
import { useState } from "react";

export const UserProfileForm = () => {
  const { currentUser } = useSelector((state) => state.user);

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
    <h1>
      <div className="container">
        <p>
          Welcome {currentUser.lastName}, here your account information, feel
          free to update
        </p>
        <div className="row col-md-10 offset-md-1">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group firstName">
              <label className="form-label fs-3">First name</label>
              <input
                type="text"
                className="form-control fs-4"
                placeholder="Doe"
                value={currentUser.firstName}
                {...register("firstName")}
              />
              <h6 className="text-danger mt-2 fw-normal">
                {errors.firstName?.message}
              </h6>
            </div>

            <div className="form-group latName">
              <label className="form-label fs-3">Last name</label>
              <input
                type="text"
                className="form-control fs-4"
                placeholder="John"
                value={currentUser.lastName}
                {...register("lastName")}
              />
              <h6 className="text-danger mt-2 fw-normal">
                {errors.lastName?.message}
              </h6>
            </div>

            <div className="form-group userName">
              <label className="form-label fs-3">Username</label>
              <input
                type="text"
                className="form-control fs-4"
                placeholder="userName"
                value={currentUser.userName}
                {...register("userName")}
              />
              <h6 className="text-danger mt-2 fw-normal">
                {errors.userName?.message}
              </h6>
            </div>

            <div className="form-group email">
              <label className="form-label fs-3">Email</label>
              <input
                type="email"
                className="form-control fs-4"
                placeholder="you@example.com"
                value={currentUser.email}
                {...register("email")}
              />
              <h6 className="text-danger mt-2 fw-normal">
                {errors.email?.message}
              </h6>
            </div>

            <div className="form-group email">
              <label className="form-label fs-3">Phon number</label>
              <input
                type="number"
                className="form-control fs-4"
                placeholder="+213 0. .. .. .. .."
                value={currentUser.contact}
                {...register("contact")}
              />
              <h6 className="text-danger mt-2 fw-normal">
                {errors.contat?.message}
              </h6>
            </div>

            <div className="form-group password">
              <label className="form-label fs-3">Password</label>
              <input
                type="text"
                className="form-control fs-4"
                placeholder="your current password"
              />
              <input
                type="text"
                className="form-control fs-4 mt-3"
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
    </h1>
  );
};
