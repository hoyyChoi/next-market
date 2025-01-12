// import { DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user?: {
//       id?: string;
//       role?: string;
//     } & DefaultSession["user"];
//   }
//   interface JWT {
//     role?: string; // JWT에 role 추가
//     id?: string; // JWT에 id 추가
//   }
// }

import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      role?: string;
    } & DefaultSession["user"];
  }
}
