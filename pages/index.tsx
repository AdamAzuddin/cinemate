import Link from "next/link";
import Layout from "@/components/Layout";
import { signOut, getSession, useSession } from "next-auth/react";
import { Button } from "@mui/material";
import { NextPageContext } from "next";

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

  
  return (
    <>
      <Layout>
        <main className="container mx-auto text-center py-20">
          <h3 className="text-white text-4xl">Home Page</h3>
        </main>
      </Layout>
    </>
  );
}

