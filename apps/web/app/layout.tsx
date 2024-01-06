import "./globals.css";
import Provider from "./components/Provider";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
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
        <Provider session={session}>
          <Navbar></Navbar>
          {children}
        </Provider>
      </body>
    </html>
  );
}
