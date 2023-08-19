import { getByEmail, verifyPassword } from "@/services/users";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
export const authOptions = {
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            async authorize({ email, password }) {
                const user = getByEmail(email);
                if (!user) {
                    throw new Error("User Not Found")
                }
                const isValid = await verifyPassword(user.password, password);
                if (!isValid) {
                    throw new Error("Incorrect Password")
                }

                return { email }
            }

        }
        )
    ],
}
export default NextAuth(authOptions)