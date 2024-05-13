import Link from "next/link";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-lg backdrop-blur-md flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <div className="space-x-4 md:w-auto flex items-center justify-between">
          <Link
            className={buttonVariants({ size: "sm", variant: "outline" })}
            href="/sign-in">
            Inicia Sesion
          </Link>
          <Link
            className={cn(buttonVariants({ size: "sm" }), "hidden md:flex")}
            href="/sign-up">
            Probar WorkWave gratis
          </Link>
        </div>
      </div>
    </div>
  );
};