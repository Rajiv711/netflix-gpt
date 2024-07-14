import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [type, setType] = useState("Sign In");

  const toggleFormType = () => {
    setType(type === "Sign In" ? "Sign Up" : "Sign In");
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/e90516bd-6925-4341-a6cf-0b9f3d0c140a/IN-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_34324b52-d094-482b-8c2a-708dc64c9065_large.jpg"
          alt="background-img"
          className=" w-full h-screen"
        />
      </div>
      <form className="w-1/2 mx-auto my-36 left-0 right-0 absolute p-8 bg-slate-950/80  text-white  ">
        <h1 className="font-bold text-3xl pb-4 flex justify-center ">{type}</h1>
        {type === "Sign Up" && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent my-4 py-3  pl-4 rounded-md   border-2"
          />
        )}

        <input
          type="text"
          placeholder="Email address"
          className="w-full bg-transparent my-4 py-3  pl-4 rounded-md   border-2 "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-transparent my-4 py-3  pl-4 rounded-md   border-2"
        />
        <button className="font-bold bg-red-600 py-3 my-4 rounded-md w-full  ">
          {type}
        </button>
        <p
          className="py-4 flex justify-center cursor-pointer"
          onClick={toggleFormType}
        >
          {type === "Sign In"
            ? "New to Netflix? Sign Up!"
            : "Already Registered Sign In Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
