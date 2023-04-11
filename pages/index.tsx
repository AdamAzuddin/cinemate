import Link from "next/link";
import type { Session } from "next-auth";
import Layout from "@/components/Layout";
import { signOut, getSession, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

// if not signed in, cannot view home page
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data} = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Layout>
        <main className="container mx-auto text-center py-20">
          <h3 className="text-white text-4xl">Home Page</h3>
          <div className="details">
            <h5 className="text-white">User name {data?.user?.name}</h5>
            <h5 className="text-white">User name {data?.user?.email}</h5>
          </div>

          <div className="justify-center flex bg-blue-500">
            <Link href="/profile" legacyBehavior>
              <a className="text-white">Profile Page</a>
            </Link>
          </div>
          <Button onClick={handleSignOut} variant="contained">
            Sign out
          </Button>
        </main>
      </Layout>
    </>
  );
}

