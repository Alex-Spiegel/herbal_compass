import Link from "next/link";
import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex h-[83vh]">
      {/* Linke Hälfte */}
      <div
        className="relative w-1/2 bg-cover bg-center rounded-r-2xl"
        style={{
          backgroundImage: "url('pexels-photo-1702949.webp')",
        }}
      >
        <div className="absolute top-28 left-6 text-lime-200">
          <h1 className="text-5xl font-bold">
            <span className="block">Explore the medicinal</span>
            <span className="block">wonders of plants</span>
          </h1>
          <p className="pt-7 text-2xl font-bold">
            ...just steps away from your home.
          </p>
        </div>
      </div>

      {/* Rechte Hälfte */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md p-8  bg-lime-100 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center">Welcome back!</h2>
          <form className="flex flex-col space-y-6">
            <div>
              <label htmlFor="email" className="font-medium text-gray-700">
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-medium text-gray-700">
                Password:
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                formAction={login}
                className="w-40 px-6 py-2 font-bold text-gray-800 bg-green-500 border border-gray-800 rounded-full hover:bg-green-500"
              >
                Log in
              </button>
            </div>
          </form>
          <p className="pt-3 text-center text-sm">
            New to Herbal Compass?{" "}
            <Link href="/signup" className="text-green-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
