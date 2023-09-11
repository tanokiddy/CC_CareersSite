import { NextResponse } from "next/server";

const locales = ["en", "vi", ""];
const defaultLocale = "vi";

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      (!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)
  );
  console.log("pathnameIsMissingLocale: ", pathnameIsMissingLocale);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale || pathname === '') {
    const locale = defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
