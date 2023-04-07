import Header from "@/components/Header";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";
import Layout from "@/components/Layout";
import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function Home() {
  const { data, status } = useSession();
  return (
    <>
      <Layout>
        <main>
          {status === "authenticated" ? <User session={data} /> : <Guest />}
        </main>
      </Layout>
    </>
  );
}

//Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-white">Guest Home Page</h3>

      <div className="justify-center flex">
        <Link href="/sign-in" legacyBehavior>
          <a className="text-white">Log In</a>
        </Link>
      </div>
    </main>
  );
}

//User
type UserProps = {
  session: Session | null;
};

function User({ session }: UserProps) {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-white text-4xl">Authorized user homepage</h3>
      <div className="details">
        <h5>{session?.user?.name}</h5>
        <h5>{session?.user?.email}</h5>
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
  );
}
