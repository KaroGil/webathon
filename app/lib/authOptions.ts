import { users } from "@/components/types/user";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Søk etter brukeren i listen basert på e-post og passord
        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        // Hvis brukeren finnes, returner brukerobjektet
        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        }

        // Hvis ingen match finnes, returner null
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
