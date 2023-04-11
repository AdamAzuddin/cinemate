import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Layout from "@/components/Layout";

const MyProfile = () => {
  const { data, status } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Layout>
        <main className="container mx-auto text-center py-20">
          <h3 className="text-white text-4xl">Authorized user homepage</h3>
          <div className="details">
            <h5 className="text-white">{data?.user?.name}</h5>
            <h5 className="text-white">{data?.user?.email}</h5>
          </div>
          <Button onClick={handleSignOut} variant="contained">
            Sign out
          </Button>
        </main>
      </Layout>
    </>
  );
};

export default MyProfile;
