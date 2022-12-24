//* this is the form to handle updating a book

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { BookSchema } from "../../helper/form.validation";
import { useParams } from "react-router-dom";
import { updateOneBook } from "../../services/books.service";
import { useEffect, useState } from "react";
import httpCommun from "../../http.commun";
import {
  successNotification,
  errorNotification,
} from "../../helper/notifications";
import "./style.css";
export const EditBookForm = () => {
  const [book, setBook] = useState(null);
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    httpCommun
      .get(`/books/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setBook(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(BookSchema),
  });

  // setting form default values
  useEffect(() => {
    let defaultValues = {};
    defaultValues.title = book ? book.title : "";
    defaultValues.author = book ? book.author : "";
    defaultValues.price = book ? book.price : "";
    defaultValues.subject = book ? book.subject : "";

    reset({ ...defaultValues });
  }, [book]);
  const handleFormSubmit = (data) => {
    const { title, author, price, subject, image } = data;
    updateOneBook(
      { id, title, author, price, subject, image },
      dispatch,
      successNotification,
      errorNotification
    );
  };

  return (
    <>
      <h1 className="text-center title">Edit your book</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input type="title" className="form-control" {...register("title")} />
          <p className="text-danger">{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label className="form-label">Author</label>
          <input
            type="author"
            className="form-control"
            {...register("author")}
          />
          <p className="text-danger">{errors.author?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Price</label>
          <input type="price" className="form-control" {...register("price")} />
          <p className="text-danger">{errors.price?.message}</p>
        </div>

        <div className="form-group">
          <label className="form-label">Subject</label>
          <input
            type="subject"
            className="form-control"
            {...register("subject")}
          />
          <p className="text-danger">{errors.subject?.message}</p>
        </div>

        <div className="form-group">
          <label>Post image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            {...register("image")}
          />
          <p className="text-danger">{errors.image?.message}</p>
        </div>
        <button className="btn button">Add</button>
      </form>
    </>
  );
};
