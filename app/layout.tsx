import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { CartProvider } from '@/context/CartContext';

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

export const metadata: Metadata = {
  title: 'PhoneHub - Your Premium Phone Store',
  description: 'Discover the latest smartphones and accessories at PhoneHub. Find the perfect phone that matches your style and needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
