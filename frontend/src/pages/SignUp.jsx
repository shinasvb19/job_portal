import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [mobile, SetMobile] = useState("");
  const [password, SetPassword] = useState("");
  const [verifyPassword, SetVerifyPassword] = useState("");
  const [validation, setValidation] = useState({
    name: {
      status: true,
      message: "",
    },
    email: {
      status: true,
      message: "",
    },
    password: {
      status: true,
      message: "",
    },
    mobile: {
      status: true,
      message: "",
    },
    passwordResult: {
      status: true,
      message: "",
    },
  });
  const nameCheck = () => {
    if (name.length < 2) {
      setValidation((prevState) => ({
        ...prevState,
        name: {
          status: false,
          message: "name must be more than 2 character",
        },
      }));
      return false;
    } else {
      setValidation((prevState) => ({
        ...prevState,
        name: {
          status: true,
          message: "",
        },
      }));
      return true;
    }
  };
  const passwordCheck = () => {
    if (password.length < 6) {
      setValidation((prevState) => ({
        ...prevState,
        password: {
          status: false,
          message: "password must be 6 characters",
        },
      }));
      return false;
    } else {
      setValidation((prevState) => ({
        ...prevState,
        password: {
          status: true,
          message: "",
        },
      }));
      return true;
    }
  };
  const mobileCheck = () => {
    if (mobile.length !== 10) {
      setValidation((prevState) => ({
        ...prevState,
        mobile: {
          status: false,
          message: "invalid mobile number",
        },
      }));
      return false;
    } else {
      setValidation((prevState) => ({
        ...prevState,
        mobile: {
          status: true,
          message: "",
        },
      }));
      return true;
    }
  };

  const passwordVerify = () => {
    if (password !== verifyPassword) {
      setValidation((prevState) => ({
        ...prevState,
        passwordResult: {
          status: false,
          message: "password does not match",
        },
      }));
      return false;
    } else {
      setValidation((prevState) => ({
        ...prevState,
        name: {
          status: true,
          message: "",
        },
      }));
      return true;
    }
  };

  const onHandleSubmit = (e) => {
    const user = { email, name, mobile, password };
    e.preventDefault();
    nameCheck();
    passwordCheck();
    mobileCheck();
    passwordVerify();
    if (
      nameCheck() &&
      passwordCheck() &&
      mobileCheck() &&
      password === verifyPassword
    ) {
      const response = axios.post("http://localhost:5000/register", user);
      console.log(response.data);
    }
  };

  return (
    <>
      <div className="flex mx-auto align-middle">
        <div className="flex flex-col w-[300px] h-[300px] items-center pt-48 mx-80 my-7  ">
          <form onSubmit={onHandleSubmit}>
            <h1 className="text-[30px] font-bold mb-10">Sign Up</h1>
            <div className=" flex flex-col items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
              <input
                value={mobile}
                onBlur={mobileCheck}
                onChange={(e) => {
                  SetMobile(e.target.value);
                }}
                type="number"
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="Mobile"
              />
              {!validation.mobile.status && (
                <p className="text-red-700 mt-6 ">
                  {validation.mobile.message}
                </p>
              )}
            </div>
            <div className=" flex items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="example@gmail.com"
              />
            </div>
            <div className=" flex flex-col items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
              <input
                type="text"
                value={name}
                onBlur={nameCheck}
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="Full name"
              />
              {!validation.name.status && (
                <p className="text-red-700 mt-6 ">{validation.name.message}</p>
              )}
            </div>

            <div className=" flex flex-col items-center w-[400px] h-[30px] border-b-2 mb-20 border-gray-500 rounded">
              <input
                type="password"
                value={password}
                onBlur={passwordCheck}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="password"
              />
              {!validation.password.status && (
                <p className="text-red-700 mt-6 ">
                  {validation.password.message}
                </p>
              )}
            </div>

            <div className=" flex flex-col items-center w-[400px] h-[30px] border-b-2  border-gray-500 rounded">
              <input
                type="password"
                value={verifyPassword}
                onBlur={passwordVerify}
                onChange={(e) => {
                  SetVerifyPassword(e.target.value);
                }}
                className="w-[100%] h-[100%] focus:outline-0 text-clip"
                placeholder="verify password"
              />
              {!validation.password.status && (
                <p className="text-red-700 mt-6 ">
                  {validation.passwordResult.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-center">
              <h1 className="py-2 pt-8">already have an account?</h1>
              <h1 className="text-[#00B1FF] font-bold">Sign in</h1>
            </div>
            <button className="mx-20  h-10 bg-[#212A2D] text-white rounded-2xl w-[200px] my-6">
              sign Up
            </button>
          </form>
        </div>
        <div className="mr-8 w-[1200px] h-[600px] bg-[url('../../public/image_processing20201125-26929-gywlop.gif')] rounded-md bg-cover pt-10  my-32"></div>
      </div>
    </>
  );
};

export default SignUp;
