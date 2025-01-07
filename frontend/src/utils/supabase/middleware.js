import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

// updateSession-Funktion: initialisiert einen Server-Client (mit meinen env-files) + some Cookie-Logik

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Diese func wird genutzt, um den JWT zu validieren & aktualisieren
  await supabase.auth.getUser();

  return supabaseResponse;
}
