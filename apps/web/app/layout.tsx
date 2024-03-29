import "./globals.css";
import Provider from "./compo/Provider";
import { Poppins } from "next/font/google";
import Navbar from "./compo/Navbar";
import { Toaster } from "components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import { getServerSession } from "next-auth";

import Footer from "./compo/Footer";
import TanstackProvider from "./compo/TanstackProvider";

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
      <body className={poppins.className + " bg-commonbg flex flex-col gap-2 "}>
        <TanstackProvider>
          <Provider session={session}>
            <Navbar></Navbar>
            {children}
            <Analytics />
            <Footer></Footer>
          </Provider>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
