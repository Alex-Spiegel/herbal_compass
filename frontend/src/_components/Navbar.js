import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    // NAV CONTAINER
    <nav
      className="h-[15vh] px-14 grid grid-cols-3 items-center text-white text-lg"
      style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      {/* LEFT CONTAINER */}
      <Link
        href="/"
        className="flex"
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
        />
        <div className="flex flex-col justify-center leading-none">
          <p>HERBAL</p>
          <p>COMPASS</p>
        </div>
      </Link>

      {/* MIDDLE CONTAINER */}
      <div className="flex justify-around gap-3">
        <Link
          href="/herbarium"
          className="hover:text-gray-600 hover:underline"
        >
          Herbarium
        </Link>
        <Link
          href="/products"
          className="hover:text-gray-600 hover:underline"
        >
          Products
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-600 hover:underline"
        >
          About Us
        </Link>
        <Link
          href="/blog"
          className="hover:text-gray-600 hover:underline"
        >
          Blog
        </Link>
      </div>

      {/* RIGHT CONTAINER */}
      <div className="flex justify-end items-center gap-2">
        <button className="w-20 px-4 py-1.5 text-sm text-white bg-green-700 border border-gray-800 rounded-full hover:bg-green-800">
          Signup
        </button>
        <button className="w-20 px-4 py-1.5 text-sm text-green-900 bg-green-500 border border-gray-800 rounded-full hover:bg-green-500">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
