/**
 * Author: Gabriel
 * Path: ./src/pages/_middleware.js
 * Creation-date: 05.02.2022
 **/

import { NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;

  if (pathname == "/github") {
    return NextResponse.redirect("https://github.com/gabrielvfonseca");
  }

  return NextResponse.next();
}
