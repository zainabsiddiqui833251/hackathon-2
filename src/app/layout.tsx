'use client'
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { usePathname } from 'next/navigation'; // Import usePathname

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname

  // Check if the current route is "/studio"
  const isStudioPage = pathname.startsWith('/studio');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Render Nav only if it's not a studio page */}
        {!isStudioPage && <Nav />}
        {children}
      </body>
    </html>
  );
}


