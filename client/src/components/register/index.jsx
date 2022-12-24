import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../helper/form.validation";
import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";
import { signup } from "../../services/auth.service";
import { useDispatch } from "react-redux";
// import {login}from '../../services/auth.service'
import "./style.css";
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });
  const dispatch = useDispatch();
  const handleFormSubmit = (data) => {

    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      contact,
      studyFeild,
    } = data;
    signup(
      { firstName, lastName, userName, email, password, contact, studyFeild },
      dispatch,
      successNotification,
      errorNotification
    );
  };
  return (
    <>
      <h1 className="text-center title">Sign up </h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label className="form-label">First name</label>
          <input
            type="text"
            placeholder="Doe"
            className="form-control"
            {...register("firstName")}
          />
          <p className="text-danger">{errors.firstName?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Last name</label>
          <input
            type="text"
            placeholder="John"
            className="form-control"
            {...register("lastName")}
          />
          <p className="text-danger">{errors.lastName?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">User name</label>
          <input
            type="type"
            placeholder="user-name"
            className="form-control"
            {...register("userName")}
          />
          <p className="text-danger">{errors.userName?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="form-control"
            {...register("email")}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder=". . . . . . . ."
            className="form-control"
            {...register("password")}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Contact method</label>
          <input
            type="text"
            placeholder="+213 0. .. .. .. .."
            className="form-control"
            {...register("contact")}
          />
          <p className="text-danger">{errors.contact?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Study feild</label>
          {/* <input
            type="text"
            placeholder="enter your email"
            className="form-control"
            {...register("studyFeild")}
          /> */}
          <div className="custom-select">
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
        </div>
        <button className="btn button">Sign up</button>
      </form>
    </>
  );
};
