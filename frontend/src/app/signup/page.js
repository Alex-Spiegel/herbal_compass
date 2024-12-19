import Link from "next/link";
import { signup } from "./actions";

export default function SignupPage() {
  return (
    <div className="flex h-[83vh]">
      {/* Linke Hälfte */}
      <div
        className="relative w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('pexels-photo-8115976.jpg')",
        }}
      >
        <div className="absolute text-right bottom-10 right-6 text-lime-200">
          <h1 className="text-5xl font-bold">
            <span className="block">Embrace the healing </span>
            <span className="block">power of nature</span>
          </h1>
          <p className="pt-7 text-2xl font-bold">
            ...right at your fingertips.
          </p>
        </div>
      </div>

      {/* Rechte Hälfte */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-3/4 max-w-md p-8  bg-lime-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center">
            Create a New Account!
          </h2>
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
                formAction={signup}
                className="w-40 px-6 py-2 font-bold text-gray-800 bg-green-500 border border-gray-800 rounded-full hover:bg-green-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="pt-3 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-green-700 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
