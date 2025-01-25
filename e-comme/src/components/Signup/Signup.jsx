import axios from "axios";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Signup() {
  let baseUrl = "https://ecommerce.routemisr.com";
  let navg = useNavigate();
  let [errorMessage, setError] = useState(null);

  let init_values = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  let validationYup = Yup.object({
    name: Yup.string().max(24).min(4),
    email: Yup.string()
      .required("Email Required")
      .email("Enter a valid Email Address"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password is invalid. Password must contain A number and Special Character"
      ),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Re-Password does not match"
    ),
  });

  let RegisterForm = useFormik({
    initialValues: init_values,
    onSubmit: RegisterAPI,
    validationSchema: validationYup,
  });

  let submit_btn = useRef(null);
  async function RegisterAPI(data) {
    setError(null);
    submit_btn.current.innerHTML = "Loading...";
    axios
      .post(`${baseUrl}/api/v1/auth/signup`, data)
      .then((req) => {
        submit_btn.current.innerHTML = "Register";
        if (req.data.message == "success") {
          navg("/login");
        }
      })
      .catch((error) => {
        submit_btn.current.innerHTML = "Register";
        setError(error.response.data.message);
      });
  }

  return (
    <>
      <form onSubmit={RegisterForm.handleSubmit} className="max-w-sm mx-auto mt-5">
        {errorMessage ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">ERROR!</span> {errorMessage}
          </div>
        ) : (
          ""
        )}

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
          {RegisterForm.errors.name && RegisterForm.touched.name ? (
            <small className="m-5">{RegisterForm.errors.name}</small>
          ) : (
            ""
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
          {RegisterForm.errors.email && RegisterForm.touched.email ? (
            <small className="m-5">{RegisterForm.errors.email}</small>
          ) : (
            ""
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {RegisterForm.errors.password && RegisterForm.touched.password ? (
            <small className="m-5">{RegisterForm.errors.password}</small>
          ) : (
            ""
          )}
        </div>

        <div className="mb-5">
          <label
            htmlFor="rePassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Re-password
          </label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
            onChange={RegisterForm.handleChange}
            onBlur={RegisterForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {RegisterForm.errors.rePassword && RegisterForm.touched.rePassword ? (
            <small className="m-5">{RegisterForm.errors.rePassword}</small>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          ref={submit_btn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </>
  );
}
