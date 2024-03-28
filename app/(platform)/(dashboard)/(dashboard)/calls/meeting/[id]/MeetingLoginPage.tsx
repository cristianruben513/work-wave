import { ButtonVideoChat, buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, SignInButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function MeetingLoginPage() {
  return (
    <div className="mx-auto w-fit space-y-3">
      <h1 className="text-center text-2xl font-bold">Unirse a la reunión</h1>
      <ClerkLoaded>
        <SignInButton>
          <ButtonVideoChat className="w-44">Iniciar sesión</ButtonVideoChat>
        </SignInButton>
        <Link
          href="?guest=true"
          className={cn(buttonClassName, "w-44 bg-gray-400 hover:bg-gray-500")}
        >
          Continuar como invitado
        </Link>
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="mx-auto animate-spin" />
      </ClerkLoading>
    </div>
  );
}
