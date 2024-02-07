import { Sidebar } from "../_components/sidebar";

export default function OrganizationLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="md:pt-24 pt-20 md:px-16 px-6 max-w-8xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};
