import "./globals.css";
import Container from "@/_components/Container";
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
      <body className="bg-gray-300 overflow-x-hidden">
        <GlobalStateProvider>
          {/* <div className="flex flex-col min-h-screen"> */}
          <Container>
            <header>
              <Navbar />
            </header>

            <main>{children}</main>

            <Footer />
          </Container>
          {/* </div> */}
        </GlobalStateProvider>
      </body>
    </html>
  );
}

export default RootLayout;
