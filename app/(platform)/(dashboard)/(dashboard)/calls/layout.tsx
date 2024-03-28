import { Info } from "@/components/info";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import ClientProvider from "./ClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <Info title="Videollamadas" />
      <main className="mx-auto max-w-5xl px-3 py-6">{children}</main>
    </ClientProvider>
  );
}
