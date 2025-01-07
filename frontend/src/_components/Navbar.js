"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Initialisiere useRouter

  // Check if the user is logged in
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsLoggedIn(!!session); // User ist eingeloggt, wenn Session existiert
    };

    checkSession();

    // Listener für Auth-Änderungen hinzufügen
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session);
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    // NAV CONTAINER
    <nav
      className="max-w-[1200px] h-[15vh] px-14 mx-auto grid grid-cols-3 items-center text-lg text-white"
      style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      {/* LEFT CONTAINER */}
      <Link href="/" className="flex">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <div className="text-2xl flex flex-col justify-center leading-none">
          <p>HERBAL</p>
          <p>COMPASS</p>
        </div>
      </Link>

      {/* MIDDLE CONTAINER */}
      <div className="text-2xl flex justify-around gap-3">
        <Link href="/herbarium" className="hover:text-gray-600 hover:underline">
          Herbarium
        </Link>
        <Link href="/products" className="hover:text-gray-600 hover:underline">
          Products
        </Link>
        <Link href="/about" className="hover:text-gray-600 hover:underline">
          About Us
        </Link>
        <Link href="/blog" className="hover:text-gray-600 hover:underline">
          Blog
        </Link>
      </div>

      {/* RIGHT CONTAINER */}
      <div className="flex justify-end items-center gap-2">
        {/* Wenn der User eingeloggt ist, Logout-Button und Account-Link anzeigen */}
        {isLoggedIn ? (
          <>
            <Link
              href="/account"
              className="px-6 py-1.5 text-sm font-bold text-black bg-lime-200 border border-gray-800 rounded-full hover:bg-lime-300"
            >
              Account
            </Link>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                router.push("/"); // Redirect nach dem Logout zur Startseite
              }}
              className="px-6 py-1.5 text-sm font-bold text-black bg-orange-300 border border-gray-800 rounded-full hover:bg-orange-400"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            {/* Signup-Button nur anzeigen, wenn NICHT auf /signup */}
            {pathname !== "/signup" && (
              <Link
                href="/signup"
                className="px-6 py-1.5 text-sm font-bold text-white bg-green-700 border border-gray-800 rounded-full hover:bg-green-800"
              >
                Sign up
              </Link>
            )}
            {/* Login-Button nur anzeigen, wenn NICHT auf /login */}
            {pathname !== "/login" && (
              <Link
                href="/login"
                className="px-6 py-1.5 text-sm font-bold text-green-900 bg-green-500 border border-gray-800 rounded-full hover:bg-green-500"
              >
                Log in
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
