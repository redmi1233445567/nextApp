import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className= "flex w-full justify-center bg-slate-500 gap-10 p-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/Posts">Posts</Link>
          <Link href="/artical">Artical</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
