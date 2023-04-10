import React from 'react'
import { useCallback, useState } from 'react';
import { TextField, Button } from "@mui/material";
import GoogleButton from "@/components/googleButton";
import axios from 'axios';
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";


const SignUpPage = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const router = useRouter()

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      await axios.post('/api/register', {
        email,
        name,
        password,
      });

      login()
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, confirmPassword, login]);

  

  return (
    <div className="flex flex-row justify-center items-center h-screen bg-zinc-900">
      <div className="h-120 p-6 bg-white rounded-lg shadow-lg grid grid-rows-3 gap-1 justify-center items-center">
        <h1 className="text-lg font-bold">Welcome to Cinemate!</h1>
        <h2 className="align-middle">Sign up to create and save your movie list.</h2>
        <TextField
          label="Username"
          variant="filled"
          id="name"
          type="text"
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <TextField
          label="Email"
          variant="filled"
          id="email"
          type="text"
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <TextField
          label="Password"
          variant="filled"
          id="password"
          type="password"
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          id="password"
          type="password"
          autoComplete="off"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(event.target.value)
          }
        />
        <Button
          variant="contained"
          color="primary"
          className="text-white bg-blue-500 hover:bg-blue-600"
          onClick={register}
        >
          Sign up
        </Button>
        <p>Or: </p>
        <GoogleButton text="Sign up"/>
      </div>
    </div>
  )
}

export default SignUpPage;