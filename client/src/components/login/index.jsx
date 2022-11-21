import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema } from "../../helper/form.validation";
import "./style.css";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) });

  const handleFormSubmit = (data) => {
    console.log(data);
    // login
    const { email, password } = data;
    login({ email, password }, dispatch, successNotification);
  };

  return (
    <>
      <h1 className="text-center title">Sign in</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="enter your email"
            className="form-control"
            {...register("email")}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="enter your password"
            className="form-control"
            {...register("password")}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>
        <button className="btn button">login</button>
      </form>
    </>
  );
};
