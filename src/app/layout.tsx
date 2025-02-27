"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Providers } from "./providers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import "./globals.css";
import React, { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
            <AppSidebar />
            <SidebarTrigger>{children}</SidebarTrigger>
          </SidebarProvider>
        </body>
      </Providers>
    </html>
  );
}
