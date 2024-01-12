import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
});

const MarketingPage = () => {
  return (
    <div className={cn(
      "flex items-center justify-center flex-col",
      headingFont.className,
    )}>
      <div className="flex items-center justify-center flex-col ">
        <div className="mb-6 flex items-center border shadow-sm p-4 px-6 bg-amber-200 text-amber-900 rounded-full uppercase bg-gradient-to-b from-yellow-200 to-yellow-500">
          <Medal className="h-6 w-6 mr-2" />
          La mejor herramienta
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Mejora tu productividad
        </h1>
        
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-slate-500 via-blue-500 to-purple-600 text-white px-8 p-2 rounded-md pb-4 w-fit my-6">
          Organiza tus proyectos
        </div>
      </div>

      <p className="text-base md:text-xl text-neutral-500 mt-10 max-w-xs md:max-w-2xl text-center mx-auto">
        Colabora, gestiona proyectos y alcanza nuevos picos de productividad. Desde rascacielos hasta la oficina en casa, la forma en que trabaja su equipo es única: logre todo con TeamPilot.
      </p>

      <Link
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-10 text-lg"
        )}
        href="/sign-up">
        Probar TeamPilot gratis
      </Link>

    </div>
  );
};

export default MarketingPage;