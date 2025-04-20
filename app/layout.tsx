import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import './styles/main.scss';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const livvic = localFont({
  src: "./fonts/Livvic-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const livvicMedium = localFont({
  src: "./fonts/Livvic-Medium.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const livvicBold = localFont({
  src: "./fonts/Livvic-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const livvicSemibold = localFont({
  src: "./fonts/Livvic-SemiBold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const overlock = localFont({
  src: "./fonts/Overlock-Regular.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const overlockBlack = localFont({
  src: "./fonts/Overlock-Black.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const overlockBold = localFont({
  src: "./fonts/Overlock-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bigwash Pressing",
  description: "La propreté et l'éclat de vos vêtements notre priorité",
  icons: {
    icon: '/L3.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="cupcake">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${livvic.variable} ${livvicBold.variable} ${livvicSemibold.variable} ${livvicMedium.variable} ${overlock.variable} ${overlockBlack.variable} ${overlockBold.variable}  antialiased`}
        >
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
        {children}
      </body>
      </html>
      </ClerkProvider>
  );
}
