import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prismadb from "../../../lib/prismadb";
import bcrypt from "bcrypt";
import { handleAuth } from '@auth0/nextjs-auth0';

/* export default handleAuth(); */


export const authOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Passsword",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("User does not exist");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword){
          throw new Error('Incorrect password')
        }

        return user
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages:  {
    signIn: '/sign-in'
  },
  debug: process.env.NODE_ENV == 'development',
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);
