import Link from "next/link";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-lg backdrop-blur-md flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link
            className={buttonVariants({ size: "sm", variant: "outline" })}
            href="/sign-in">
            Iniciar Sesion
          </Link>
          <Link
            className={buttonVariants({ size: "sm" })}
            href="/sign-up">
            Probar TeamPilot gratis
          </Link>
        </div>
      </div>
    </div>
  );
};