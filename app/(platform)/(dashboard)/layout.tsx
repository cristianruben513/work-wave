import { Navbar } from "./_components/navbar";
import Background from "@/components/background";

const DashboardLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="h-full">
      <Background />
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
