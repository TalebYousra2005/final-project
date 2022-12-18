import * as yup from "yup";
//* validating the signin form
export const signinSchema = yup.object({
  email: yup.string().email().required("can not sign in without email"),
  password: yup
    .string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimus"),
});

//* validating the signup form
export const signupSchema = yup.object({
  firstName: yup.string().required("Please enter your name"),
  lastName: yup.string().required("please enter you last name"),
  userName: yup.string().required("please choose a username"),
  email: yup.string().email().required("can not signup without email"),
  password: yup
    .string()
    .min(8, "Password is too short - should be 8 chars minimus")
    .required("no password provided"),
  studyFeild: yup.string().required("choose your study feild"),
});

//* validating the addBook form
export const BookSchema = yup.object({
  title: yup.string().required("Please enter a title"),
  author: yup.string(),
  price: yup.number().required("please set a price, it must be a number"),
  subject: yup.string().required("precise a subject for your book please"),
  image: yup.mixed().required("File is required"),
  // password: yup
  //   .string()
  //   .min(8, "Password is too short - should be 8 chars minimus")
  //   .required("no password provided"),
  // studyFeild: yup.string().required("choose your study feild"),
});
