// app/legal/copyright/page.js

import Link from "next/link";

export default function Copyright() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 text-sm">
      <h1 className="text-2xl font-semibold mb-6">
        Copyright & Legal Information
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Copyright &#169; 2024 Herbal Compass
        </h2>
        <p className="text-gray-700">
          All rights reserved. Herbal Compass, its content, and the design of
          this website are owned by the company and protected by copyright laws.
          Unauthorized use, copying, or redistribution of the website or its
          content is prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Credits</h2>
        <p className="text-gray-700">
          The following external resources were used to build Herbal Compass:
        </p>

        <ul className="list-disc pl-5 mt-4 text-gray-700">
          <li>
            <Link
              href="https://www.flaticon.com/free-icons/plant"
              title="plant icons"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plant icons created by Freepik - Flaticon
            </Link>
          </li>
          <li>
            <Link
              href="https://www.flaticon.com/free-icons/tea-ceremony"
              title="tea ceremony icons"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tea ceremony icons created by Freepik - Flaticon
            </Link>
          </li>
          <li>
            <Link
              href="https://www.flaticon.com/free-icons/open-book"
              title="open book icons"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open book icons created by Freepik - Flaticon
            </Link>
          </li>
          <li>
            <Link
              href="https://www.pexels.com/photo/a-person-using-a-mortar-and-pestle-5480166/"
              title="A Person Using a Mortar and Pestle"
              className="text-blue-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Person Using a Mortar and Pestle by Yan Krukau - Pexels
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <p className="text-gray-700">
          For more legal information, please visit our{" "}
          <Link href="/legal/terms" className="text-blue-700 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/legal/privacy-policy"
            className="text-blue-700 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
