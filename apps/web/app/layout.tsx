import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={poppins.className + " bg-commonbg flex flex-col gap-2"}
        >
          <Navbar></Navbar>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
