import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ojas Shikshan and Pariksha Sansthan",
  description: "ojas shikshan and pariksha sansthan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <div className=" border-t-[1px] border-slate-50/50"></div>
        <Footer/>
        </body>
    </html>
  );
}
