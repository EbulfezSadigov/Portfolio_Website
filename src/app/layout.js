import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Abulfaz Sadigov | Portfolio",
    template: "%s | Abulfaz Sadigov",
  },
  description:
    "Abulfaz Sadigov — Front-End Developer and programming instructor. Projects, experience, and contact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
