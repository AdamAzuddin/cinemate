import Header from "@/components/Header";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { Session } from "next-auth";

export default function Home() {
  const { data, status } = useSession();
  return (
    <>
      <Header showAuthButton={status === "authenticated" ? false : true} />
      <main>
        {status === "authenticated" ? <User session={data} /> : <Guest />}
      </main>
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
    </main>
  );
}
