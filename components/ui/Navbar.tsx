import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between p-3 font-medium">
        <Link href="/calls/">Inicio</Link>
        <Link href="/calls/meetings">Videollamadas</Link>
      </div>
    </header>
  );
}
