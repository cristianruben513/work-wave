import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
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
      <div className="flex items-center justify-center flex-col">

        <h1 className="text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-600 bg-amber-300 mb-5">
          Mejora tu productividad
        </h1>

        <div className="flex items-center justify-center text-xl md:text-6xl bg-gradient-to-r from-slate-500 via-blue-500 to-purple-600 text-white px-8 py-3 rounded-md w-fit my-4 md:pb-5 pb-4">
          Organiza tus proyectos
        </div>
      </div>

      <p className="text-base md:text-xl text-neutral-500 mt-3 text-center mx-auto text-pretty">
        Colabora, gestiona proyectos y alcanza nuevos picos de productividad.
      </p>

      <Link
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-10 text-lg"
        )}
        href="/sign-up">
        Probar TeamPilot gratis
      </Link>

      <Image
        src="/screenshot.webp"
        alt="Screenshot"
        width={2000}
        height={1008}
        className="rounded-xl mt-10 max-w-72 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
      />

      <Image
        src="/screenshot2.webp"
        alt="Screenshot"
        width={2000}
        height={1008}
        className="rounded-xl mt-6 md:mt-10 max-w-72 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
      />

    </div>
  );
};

export default MarketingPage;