import "./globals.css";
import Provider from "./components/Provider";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { Toaster } from "components/ui/toaster";

import { getServerSession } from "next-auth";

import Footer from "./components/Footer";
import TanstackProvider from "./components/TanstackProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={poppins.className + " bg-commonbg flex flex-col gap-2"}>
        <TanstackProvider>
          <Provider session={session}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </Provider>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
