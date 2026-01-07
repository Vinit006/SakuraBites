import type { Metadata } from "next";
import { Geist, Sansita, Bitter } from "next/font/google";
import "./globals.css";

const sansita = Sansita({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sansita",
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
});

 


export const metadata: Metadata = {
  title: "Sukrabites - Your Favourite Recipe App",
  description: "Recipe's which you love",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`   ${bitter.variable}  ${sansita.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
