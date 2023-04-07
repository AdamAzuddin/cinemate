import Link from "next/link";
import { useState } from "react";


export default function Home() {

  const [session, setSession] = useState(true)

  return (
    <div>
      <main className="container mx-auto text-center py-20">
        <h1 className="text-white">Cinemate</h1>
        {session? <User/> : <Guest />}
      </main>
    </div>
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
function User() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-white text-4xl">Authorized user homepage</h3>
      <div className="details">
        <h5>Unknown</h5>
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>

      <div className="justify-center flex bg-blue-500">
        <Link href="/profile" legacyBehavior>
          <a className="text-white">Profile Page</a>
        </Link>
      </div>
    </main>
  );
}
