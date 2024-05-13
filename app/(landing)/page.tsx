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

        <div className="flex items-center justify-center text-2xl md:text-6xl bg-gradient-to-r from-emerald-500 via-blue-500 to-green-600 text-white px-8 py-2 md:py-3 rounded-md w-fit mb-4">
          Organiza tus proyectos
        </div>
      </div>

      <p className="text-base md:text-xl text-neutral-500 mt-3 text-center mx-auto text-pretty px-5">
        Colabora, gestiona proyectos y alcanza nuevos picos de productividad.
      </p>

      <Link
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-10 text-base md:text-lg"
        )}
        href="/sign-up">
        Probar WorkWave gratis
      </Link>

      <Image
        src="/screenshot.jpg"
        alt="Screenshot"
        width={2400}
        height={1350}
        className="rounded-xl mt-10 w-[95%] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto"
      />
    </div>
  );
};

export default MarketingPage;