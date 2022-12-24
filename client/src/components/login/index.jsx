import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signinSchema } from "../../helper/form.validation";
import { signin } from "../../services/auth.service";
import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";
import "./style.css";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signinSchema) });
  const dispatch = useDispatch();
  const handleFormSubmit = (data) => {
    const { email, password } = data;
    signin(
      { email, password },
      dispatch,
      successNotification,
      errorNotification
    );
  };

  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
               Sign in
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div >
            <div className="modal-body form-container signin">
              <div >
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <></>
    </>
  );
};
