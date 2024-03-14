import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";
import { LoginSchema } from "@/types/zod/schema";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = LoginSchema.safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = getUserByEmail(email);
          if (!user) {
            return null;
          } else {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
              return user;
            } else {
              console.log("Invalid credentials");
              return null;
            }
          }
        }
      },
    }),
  ],
});
