import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_SIGNIN } from "../actions";
import { useDispatch } from "react-redux";
import style from "./styles/SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const autoFillHandler = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;
    setEmail('admin@example.com');
    setPassword("1234");
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!isValidEmail(value) ? "Please enter a valid email." : "");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      !isValidPassword(value)
        ? "Your password must contain between 4 and 60 characters."
        : ""
    );
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPassword = (password: string) =>
    password.length >= 4 && password.length <= 60;

  const onSubmitHandler = async () => {
    try {
      const { data } = await axios.post("api/v1/users/signin", {
        email: email,
        password: password,
      });
      dispatch({ type: USER_SIGNIN, payload: data });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "An error occurred");
      } else {
        alert("An error occurred");
      }
    }

  };

  return (
    // sign-in-container
    <div className={style.signInContainer}>
      <div className="card">
        <h1 className="signInTitle">Sign In</h1>
        <div className="relative mt-5">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            id="floating_filled"
            className={`block rounded-md px-2.5 pb-2.5 pt-5 w-60 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 ${
              emailError ? "border-orange-500" : "border-gray-300"
            } focus:border-orange-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="floating_filled"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email address
          </label>
        </div>
        {emailError && (
          <div>
            <p
              id="email_error_help"
              className="mt-2 text-xs text-orange-500 dark:text-orange-400"
            >
              <span className="font-medium"></span> {emailError}
            </p>
          </div>
        )}
        <div className="relative mt-5">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            id="floating_filled2"
            className={`block rounded-md px-2.5 pb-2.5 pt-5 w-60 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300  ${
              passwordError ? "border-orange-500" : "border-gray-300"
            } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500  focus:outline-none focus:ring-0 focus:border-600 peer`}
            placeholder=" "
          />
          <label
            htmlFor="floating_filled2"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Password
          </label>
        </div>
        {passwordError && (
          <div>
            <p
              id="password_error_help"
              className="mt-2 text-xs text-orange-500 dark:text-orange-400"
            >
              <span className="font-medium"></span> {passwordError}
            </p>
          </div>
        )}
        <br />
        <button
          className="loginBtn w-60 py-2 hover:bg-red-800"
          type="submit"
          onClick={onSubmitHandler}
        >
          Login
        </button>
        <h3>
          <span className="firstTimeUsing">First time using Netflix? </span>
          <Link className="link" to={"/signup"}>
            Create an account
          </Link>
        </h3>
        <div className="flex justify-center items-center">
          <p className="text-[#a09393] mt-3">Welcome to my Netflix clone :) <br/>For your convenience, you can use the <br/> following demo account:</p>
        </div>
        <div className="border-2 rounded p-8 mt-3">
          <div>Username: admin@example.com</div>
          <div>Password: 1234</div>
          <button onClick={(e)=>autoFillHandler(e)} className="text-white bg-gray-500 rounded pt-3 pb-3 pl-6 pr-6 ml-16 mt-2 opacity-50">Auto Fill</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
