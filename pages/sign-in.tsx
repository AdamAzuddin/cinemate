import React, { useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import GoogleButton from "@/components/googleButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignInPage = () => {

  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)

  // Google Handler function

  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  // Credentials sign in
  const login = useCallback(async () => {
    setError(false)
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      if (res?.status==401){
        setError(true)
      }
      else{
        router.push('/')
      }

      
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-zinc-900">
      <div className="h-120 p-6 bg-white rounded-lg shadow-lg grid grid-rows-3 gap-1 justify-center items-center">
        <h1 className="text-lg font-bold">Welcome back to Cinemate!</h1>
        <h2 className="align-middle">Please sign in to continue</h2>
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
          error={error}
          helperText={error? 'Incorrect email or password': ''}
        />
        <Button
          variant="contained"
          color="primary"
          className="text-white bg-blue-500 hover:bg-blue-600"
          onClick={login}
        >
          Sign in
        </Button>
        <p>Or:</p>
        <GoogleButton text="Sign in" onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SignInPage;
