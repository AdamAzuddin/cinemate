import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';


const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <p>Here is some content...</p>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    return {
      props: {},
    };
  };
