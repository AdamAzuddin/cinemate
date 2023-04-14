import Layout from "@/components/Layout";
import {getSession, useSession } from "next-auth/react";
import { NextPageContext } from "next";
import Movies from "@/components/Movies";
import Banner from "@/components/Banner";
import useApi from "@/hooks/useApi";

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
  const data = useApi('/search/title?title=batman&country=us&show_type=movie&output_language=en')
  console.log(data)


  
  return (
    <>
      <Layout>
        <main className="container mx-auto  py-20">
          <Banner/>
          <section>
            {/* Row*/}
          </section>
        </main>
      </Layout>
    </>
  );
}

