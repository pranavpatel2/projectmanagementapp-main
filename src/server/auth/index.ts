import NextAuth from "next-auth";
import { authConfig } from "./config";

// Use NextAuth as the handler for both GET and POST requests
export const auth = NextAuth(authConfig);
export { auth as handlers }; // export the handler directly