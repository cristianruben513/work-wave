"use client";

interface InfoProps {
  title: string;
  children?: React.ReactNode;
}

export const Info = ({ title, children }: InfoProps) => {
  return (
    <div className="flex items-center justify-between gap-x-4 bg-sky-400/20 dark:bg-sky-900/30 p-4 backdrop-blur-sm rounded-xl border-4 border-sky-400/20 dark:border-sky-600/10">
      <p className="font-semibold text-lg md:text-xl">{title}</p>
      {children}
    </div>
  );
};
