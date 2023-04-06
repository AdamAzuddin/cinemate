import React from "react";
import { TextField, Button } from "@mui/material";
import GoogleButton from "@/components/googleButton";

const SignInPage = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-zinc-900">
      <div className="h-120 p-6 bg-white rounded-lg shadow-lg grid grid-rows-3 gap-1 justify-center items-center">
        <h1 className="text-lg font-bold">Welcome back to Cinemate!</h1>
        <h2 className="align-middle">Please sign in to continue</h2>
        <TextField
          label="Username"
          variant="filled"
          id="username"
          type="text"
          autoComplete="off"
        />
        <TextField
          label="Password"
          variant="filled"
          id="password"
          type="password"
          autoComplete="off"
        />
        <Button
          variant="contained"
          color="primary"
          className="text-white bg-blue-500 hover:bg-blue-600"
        >
          Sign in
        </Button>
        <p>Or:</p>
        <GoogleButton text="Sign in"/>
      </div>
    </div>
  );
};

export default SignInPage;
