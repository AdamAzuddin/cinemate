import React from "react";
import Layout from "@/components/Layout";
import { useUser } from '@auth0/nextjs-auth0/client';

const MyProfile = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <main className="container mx-auto text-center py-20">
          <h1>{user?.picture}</h1>
          <a href="/api/auth/logout">Logout</a>
        </main>
      </Layout>
    </>
  );
};

export default MyProfile;
