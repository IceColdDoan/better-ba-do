import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import { AuthContextProvider } from "@/app/lib/context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BA-DO!",
  description: "The Way To-Do Things",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
      <html lang="en">
        <body className={inter.className}>
          <AuthContextProvider>
            <Navbar/>
            {children}
          </AuthContextProvider>
        </body>
      </html>
  );
}
