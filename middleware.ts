import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { p } from "@/lib/kafka";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (files in the public folder)
     * And the ones ending with:
     * - .png (PNG files)
     * - .jpg or .jpeg (JPG files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public/)(?!.*\\.(?:png|jpg|jpeg)$).*)",
    "/",
  ],
};

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  console.log(request.url);
  const message = {
    country: request.geo?.country || null,
    city: request.geo?.city || null,
    region: request.geo?.region || null,
    url: request.url || null,
    ip: request.headers.get("x-real-ip") || null,
    mobile: request.headers.get("sec-ch-ua-mobile") || null,
    platform: request.headers.get("sec-ch-ua-platform") || null,
    useragent: request.headers.get("user-agent") || null,
  };

  const topic = "page_views";
  event.waitUntil(p.produce(topic, JSON.stringify(message)));

  return NextResponse.next();
}
