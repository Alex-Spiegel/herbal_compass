import Link from "next/link";
import Image from "next/image";
import Container80 from "./Container80";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-20 bg-mygreen rounded-t-3xl text-white">
      <Container80>
        {/* TOP PART */}
        <div className="flex py-4 gap-6">
          {/* LEFT */}
          <div className="w-[40%] flex flex-col items-center">
            <h2 className="text-3xl font-bold">HERBAL COMPASS</h2>
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div>

          {/* RIGHT */}
          <div className="w-[60%] flex flex-col gap-4 px-0">
            <div className="flex flex-wrap justify-between gap-6">
              {/* BLOCK 01 */}
              <div>
                <h3 className="pb-3 font-bold">About Us</h3>
                <ul className="text-xs flex flex-col gap-1">
                  <li>Mission</li>
                  <li>Team</li>
                  <li>Our Values</li>
                  <li>Partnerships</li>
                </ul>
              </div>

              {/* BLOCK 02 */}
              <div>
                <h3 className="pb-3 font-bold">Support</h3>
                <ul className="text-xs flex flex-col gap-1">
                  <li>Contact</li>
                  <li>FAQ</li>
                  <li>Shipping & Returns</li>
                  <li>How it Works</li>
                </ul>
              </div>

              {/* BLOCK 03 */}
              <div>
                <h3 className="pb-3 font-bold">Contact Us</h3>
                <ul className="flex flex-col gap-2 text-xs">
                  <li className="flex items-center gap-2">
                    <FaPhoneVolume /> +49 72505 5378
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineEmail /> info@herbalcompass.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM PART */}
        <div className="border-t border-white py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs">
          {/* SOCIALS LEFT */}
          <div>
            <p className="font-semibold mb-1">FOLLOW US</p>
            <div className="flex gap-3 text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaInstagramSquare />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>

          {/* LEGAL LINKS RIGHT */}
          <div className="mt-4 sm:mt-0 sm:text-right">
            <span className="hover:underline">
              <Link href="/legal/copyright">© 2024 Herbal Compass</Link>
            </span>
            <span className="mx-2">|</span>
            <span className="hover:underline">
              <Link href="/legal/terms">Terms of Service</Link>
            </span>
            <span className="mx-2">|</span>
            <span className="hover:underline">
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
            </span>
          </div>
        </div>
      </Container80>
    </footer>
  );
}

export default Footer;
