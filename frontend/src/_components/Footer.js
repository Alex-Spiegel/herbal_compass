import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="px-14 text-white bg-lime-700 rounded-t-2xl">
        {/* TOP PART */}
        <div className="flex  py-6">
          {/* LEFT DIV */}
          <div className="w-[40%] flex justify-center items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          {/* RIGHT DIV */}
          <div className="w-[60%] flex flex-col gap-2 px-16">
            <h2 className="text-4xl mb-5">HERBAL COMPASS</h2>
            <div className="flex justify-between">
              {/* LINK BLOCK 01 */}
              <div>
                <h3 className="pb-3 font-bold">About Us</h3>
                <ul className="text-xs">
                  <li>
                    <Link
                      href="/about/mission"
                      className="hover:underline"
                    >
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="hover:underline"
                    >
                      Team
                    </Link>
                  </li>
                </ul>
              </div>

              {/* LINK BLOCK 02 */}
              <div>
                <h3 className="pb-3 font-bold">Support</h3>
                <ul className="text-xs">
                  <li>
                    <Link
                      href="/contact"
                      className="hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:underline"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* LINK BLOCK 03 */}
              <div>
                <h3 className="pb-3 font-bold">Social</h3>
                <ul className="text-xs">
                  <li>
                    <Link
                      href="https://www.instagram.com/herbal-compass"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/herbalcompass"
                      className="hover:underline"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://x.com/herbalcompassnews"
                      className="hover:underline"
                    >
                      X
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PART */}
        <div className="h-14 flex justify-between items-center text-xs border-t border-white">
          <Link
            href="/legal/copyright"
            className="hover:underline"
          >
            Copright &#169; 2024 Herbal Compass
          </Link>
          <Link
            href="/legal/terms"
            className="hover:underline"
          >
            Terms of Service
          </Link>
          <Link
            href="/legal/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
