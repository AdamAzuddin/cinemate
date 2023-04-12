import Layout from "@/components/Layout";
import {getSession, useSession } from "next-auth/react";
import { NextPageContext } from "next";
import Movies from "@/components/HorizontalMovieScroll";

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
        <main className="container mx-auto  py-20 overflow-x-scroll">
          <h3 className="text-white text-4xl text-center">Home Page</h3>
          <Movies title="Trending"/>
          <Movies title="Fresh release"/>
        </main>
      </Layout>
    </>
  );
}

