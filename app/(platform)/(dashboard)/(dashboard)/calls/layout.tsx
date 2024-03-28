import Navbar from "@/components/ui/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientProvider from "./ClientProvider";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TeamPilot Video Chat",
  description: "Video Chat service created with Next.js & Stream for TeamPilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <Navbar />
      <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
    </ClientProvider>
  );
}
