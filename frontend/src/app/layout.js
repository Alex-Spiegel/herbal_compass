import "./globals.css";
import Navbar from "@/_components/Navbar";
import Footer from "@/_components/Footer";

import GlobalStateProvider from "@/context/GlobalState";

export const metadata = {
  title: "Herbal Compass",
  description: "Discover natural remedies and herbal products",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-mygreen">
        <GlobalStateProvider>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </GlobalStateProvider>
      </body>
    </html>
  );
}

export default RootLayout;
