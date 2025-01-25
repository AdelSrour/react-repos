import axios from "axios";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  let baseUrl = "https://ecommerce.routemisr.com";
  let navg = useNavigate();
  let [errorMessage, setError] = useState(null);
  let { setToken, setLoginState, loginIn } = useAuthContext();

  let init_values = {
    email: "",
    password: "",
  };

  let validationYup = Yup.object({
    email: Yup.string()
      .required("Email Required")
      .email("Enter a valid Email Address"),
    password: Yup.string()
      .required("Password is Required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password is invalid"
      ),
  });

  let LoginForm = useFormik({
    initialValues: init_values,
    onSubmit: LoginAPI,
    validationSchema: validationYup,
  });

  let submit_btn = useRef(null);
  async function LoginAPI(data) {
    setError(null);
    submit_btn.current.innerHTML = "Loading...";
    axios
      .post(`${baseUrl}/api/v1/auth/signin`, data)
      .then((req) => {
        submit_btn.current.innerHTML = "Login";

        if (req.data.message == "success") {
          loginIn(req.data.token);
        }
      })
      .catch((error) => {
        submit_btn.current.innerHTML = "Login";
        setError(error.response.data.message);
      });
  }

  return (
    <>
      <form onSubmit={LoginForm.handleSubmit} className="max-w-sm mx-auto mt-5">
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
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
          {LoginForm.errors.email && LoginForm.touched.email ? (
            <small className="m-5">{LoginForm.errors.email}</small>
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
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {LoginForm.errors.password && LoginForm.touched.password ? (
            <small className="m-5">{LoginForm.errors.password}</small>
          ) : (
            ""
          )}
        </div>

        <Link
          to="/reset"
          className="my-5 block text-blue-800 underline-offset-8 underline"
        >
          Forgot your Password?
        </Link>

        <button
          ref={submit_btn}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
