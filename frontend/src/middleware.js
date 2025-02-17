import { updateSession } from "@/utils/supabase/middleware";

// This middleware calls updateSession aus (s.o.) - wird in allen requests ausgeführt
// außer den im Matcher (s.u.) ausgeschlossenen

export async function middleware(request) {
  console.log(`Middleware triggered for path: ${request.nextUrl.pathname}`);
  // update user's auth session
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|$).*)",
  ],
};
