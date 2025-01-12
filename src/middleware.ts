// export { default } from "next-auth/middleware";

// export const config = { match: ["/admin", "/user"] };

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("aa");
//   return NextResponse.redirect(new URL("/admin", request.url));
// }

// export const config = {
//   matcher: ["/user"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth as getSession } from "@/auth"; // import { auth } from '@/auth'

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/user") && !session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (pathname.startsWith("/admin") && session?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname.startsWith("/auth") && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
// // 인증이 필요한 페이지 접근 제어!
// if (isMatch(pathname, matchersForAuth)) {
//   return session // 세션 정보 확인
//     ? NextResponse.next()
//     : NextResponse.redirect(new URL("/api/auth/signin", request.url));
//   // : NextResponse.redirect(new URL(`/signin?callbackUrl=${request.url}`, request.url))
// }
// // 인증 후 회원가입 및 로그인 접근 제어!
// if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
//   return (await getSession())
//     ? NextResponse.redirect(new URL("/", request.url))
//     : NextResponse.next();
// }
// return NextResponse.next();

// 경로 일치 확인!
// function isMatch(pathname: string, urls: string[]) {
//   return urls.some((url) => !!match(url)(pathname));
// }
