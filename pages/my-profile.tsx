import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";

const MyProfile = () => {
  const { data, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Layout>
        <h3 className="text-white text-4xl">Authorized user homepage</h3>
        <div className="details">
          <h5>{data?.user?.name}</h5>
          <h5>{data?.user?.email}</h5>
        </div>
        <Button onClick={handleSignOut} variant="contained">
          Sign out
        </Button>
      </Layout>
    </>
  );
};

export default MyProfile;
