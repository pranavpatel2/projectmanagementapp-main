// ~/server/auth.ts or ~/server/auth/config.ts

import NextAuth from "next-auth";
import { authConfig } from "~/server/auth/config";


const handler = NextAuth(authConfig);

// Export GET and POST handlers
export const handlers = {
  GET: handler,
  POST: handler,
};
