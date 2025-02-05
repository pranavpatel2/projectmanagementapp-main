// src/app/api/auth/[...nextauth]/route.ts

import { auth } from "~/server/auth";  // Import the handler from the auth file

// Export GET and POST handlers
export const GET = auth;
export const POST = auth;
