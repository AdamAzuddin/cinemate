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

function getRandomIMDbID() {
  // Generate a random number between 1 and 10,000,000 (inclusive)
  const randomID = Math.floor(Math.random() * 10000000) + 1;
  
  // Convert the number to a string and pad it with leading zeros
  const imdbID = randomID.toString().padStart(7, '0');
  
  // Add the "tt" prefix to the string to form a valid IMDb ID
  return "tt" + imdbID;
}


export default function Home() {
  const randomIMDbID = getRandomIMDbID()
  const bannerMovie = useApi(`/search/title?title=batman&country=us&show_type=movie&output_language=en&limit=1`)
  console.log(bannerMovie)
 

  
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

