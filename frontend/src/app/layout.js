import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Herbal Compass",
  description: "Discover natural remedies and herbal products",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-mygreen">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
