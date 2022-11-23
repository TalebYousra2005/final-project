import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useDispatch} from 'react-redux'
import { signinSchema } from "../../helper/form.validation";
import {signin} from '../../services/auth.service'
import {successNotification,errorNotification}from '../../helper/notifications'
import "./style.css";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) });
  const dispatch = useDispatch()
  const handleFormSubmit = (data) => {
    console.log(data);
    // login
    const { email, password } = data;
    signin({ email, password }, dispatch, successNotification,errorNotification);
  };

  return (
    <>
      <h1 className="text-center title">Sign in</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
        <button className="btn button">Sign in</button>
      </form>
    </>
  );
};
