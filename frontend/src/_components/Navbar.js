"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const pathname = usePathname();
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinkStyle = (href) =>
    `hover:text-gray-800 hover:underline ${
      pathname.startsWith(href) ? "underline font-semibold text-gray-600" : ""
    }`;

  return (
    <nav className="text-white bg-mygreen">
      <div
        className="flex justify-between lg:grid lg:grid-cols-3 items-center px-2 py-1 text-lg"
        style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
      >
        {/* LEFT CONTAINER - Logo*/}
        <Link href="/" className="flex">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <div className="text-2xl flex flex-col justify-center leading-none">
            <p>HERBAL</p>
            <p>COMPASS</p>
          </div>
        </Link>

        {/* MIDDLE CONTAINER - Desktop Nav*/}
        <div className="hidden lg:flex justify-around gap-3 text-xl ">
          <Link href="/" className={navLinkStyle("/")}>
            Home
          </Link>
          <Link href="/herbarium" className={navLinkStyle("/herbarium")}>
            Herbarium
          </Link>
          <Link href="/products" className={navLinkStyle("/products")}>
            Products
          </Link>
          <Link href="/about" className={navLinkStyle("/about")}>
            About Us
          </Link>
          <Link href="/blog" className={navLinkStyle("/blog")}>
            Blog
          </Link>
        </div>

        {/* RIGHT CONTAINER - Desktop Auth-Buttons*/}
        <div className="hidden lg:flex justify-end items-center gap-2">
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
                  className="px-6 py-1.5 text-sm font-bold text-green-900 bg-lime-300 border border-gray-800 rounded-full hover:bg-green-500"
                >
                  Log in
                </Link>
              )}
            </>
          )}
        </div>
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-4xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden flex flex-col gap-2 mt-2 px-4">
          <Link href="/" className={navLinkStyle("/")}>
            Home
          </Link>
          <Link href="/herbarium" className={navLinkStyle("/herbarium")}>
            Herbarium
          </Link>
          <Link href="/products" className={navLinkStyle("/products")}>
            Products
          </Link>
          <Link href="/about" className={navLinkStyle("/about")}>
            About Us
          </Link>
          <Link href="/blog" className={navLinkStyle("/blog")}>
            Blog
          </Link>

          {/* Mobile Auth Buttons */}
          <div className="w-28 mt-2 flex flex-col gap-2">
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
                    className="px-6 py-1.5 text-sm font-bold text-green-900 bg-lime-300 border border-gray-800 rounded-full hover:bg-green-500"
                  >
                    Log in
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
