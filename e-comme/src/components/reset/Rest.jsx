import axios, { Axios } from "axios";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  let baseUrl = "https://ecommerce.routemisr.com";
  let navg = useNavigate();
  let [errorMessage, setError] = useState(null);

  let init_values = {
    email: "",
  };

  let ResetValidation = Yup.object({
    email: Yup.string()
      .required("Email Required")
      .email("Enter a valid Email Address"),
  });

  let CodeForm = useFormik({
    initialValues: init_values,
    onSubmit: codeAPI,
    validationSchema: ResetValidation,
  });

  var [enteredEmail, setEmail] = useState(null);
  let submit_btn = useRef(null);
  let codeForm = useRef(null);
  async function codeAPI(data, e) {
    setError(null);
    submit_btn.current.innerHTML = "Loading...";
    axios
      .post(`${baseUrl}/api/v1/auth/forgotPasswords`, data)
      .then((req) => {
        submit_btn.current.innerHTML = "Reset";
        if (req.data.statusMsg == "success") {
          setEmail(data.email);
          codeForm.current.className = "hidden";
          resetFormref.current.className = "max-w-sm mx-auto mt-5 block";
        }
      })
      .catch((error) => {
        submit_btn.current.innerHTML = "Reset";
        setError(error.response.data.message);
      });
  }

  let resetData = {
    email: "",
    code: "",
    newPassword: "",
  };

  let [errorMessage2, setError2] = useState(null);

  let ResetValidation2 = Yup.object({
    newPassword: Yup.string()
      .required("newPassword is Required")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "newPassword is invalid, it must have atleast 1 number and special characters"
      ),
    code: Yup.number().required("Code must be a number"),
  });

  let resetFormref = useRef(null);
  let resetForm = useFormik({
    initialValues: resetData,
    onSubmit: resetAPI,
    validationSchema: ResetValidation2,
  });

  let submit_btn2 = useRef(null);
  function resetAPI(data) {
    setError2(null);
    submit_btn2.current.innerHTML = "Loading...";

    //Send code
    let codeData = {
      resetCode: data.code,
    };
    axios
      .post(`${baseUrl}/api/v1/auth/verifyResetCode`, codeData)
      .then((req) => {
        submit_btn2.current.innerHTML = "Reset Password";
        if (req.data.status === "Success") {
          resetPW(data);
        } else {
          setError2(req.data.message);
        }
      })
      .catch((error) => {
        submit_btn2.current.innerHTML = "Reset Password";
        setError2(error.response.data.message);
      });
  }

  function resetPW(data) {
    let changepwData = {
      email: enteredEmail,
      newPassword: data.newPassword,
    };

    axios
      .put(`${baseUrl}/api/v1/auth/resetPassword`, changepwData)
      .then((req) => {
        submit_btn2.current.innerHTML = "Reset Password";
        console.log(req.data);
        if (req.data.token) {
          navg("/login");
        } else {
          setError2(req.data.message);
        }
      })
      .catch((error) => {
        submit_btn2.current.innerHTML = "Reset Password";
        setError2(error.response.data.message);
      });
  }
  return (
    <>
      <form
        onSubmit={CodeForm.handleSubmit}
        ref={codeForm}
        className="max-w-sm mx-auto mt-5"
      >
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
            htmlhtmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={CodeForm.handleChange}
            onBlur={CodeForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
          {CodeForm.errors.email && CodeForm.touched.email ? (
            <small className="m-5">{CodeForm.errors.email}</small>
          ) : (
            ""
          )}
        </div>

        <button
          ref={submit_btn}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Reset
        </button>
      </form>

      <form
        onSubmit={resetForm.handleSubmit}
        ref={resetFormref}
        className="max-w-sm mx-auto mt-5 hidden"
      >
        {errorMessage2 ? (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">ERROR!</span> {errorMessage2}
          </div>
        ) : (
          ""
        )}

        <div className="mb-5">
          <label
            htmlhtmlFor="code"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            onChange={resetForm.handleChange}
            onBlur={resetForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Verfication code"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={resetForm.handleChange}
            onBlur={resetForm.handleBlur}
            value={enteredEmail}
            hidden
          />
          {resetForm.errors.email && resetForm.touched.email ? (
            <small className="m-5">{resetForm.errors.email}</small>
          ) : (
            ""
          )}

          {resetForm.errors.code && resetForm.touched.code ? (
            <small className="m-5">{resetForm.errors.code}</small>
          ) : (
            ""
          )}
        </div>

        <div className="mb-5">
          <label
            htmlhtmlFor="newPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            onChange={resetForm.handleChange}
            onBlur={resetForm.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {resetForm.errors.newPassword && resetForm.touched.newPassword ? (
            <small className="m-5">{resetForm.errors.newPassword}</small>
          ) : (
            ""
          )}
        </div>

        <button
          ref={submit_btn2}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Change Password
        </button>
      </form>
    </>
  );
}
