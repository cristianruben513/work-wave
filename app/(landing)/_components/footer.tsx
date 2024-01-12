import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <div className="w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <a
          className="font-bold text-sm"
          href="https://cristianfigueroa.dev"
        >
          Cristian Ruben
        </a>
      </div>
    </div>
  );
};