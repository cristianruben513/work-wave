import Background from "./_components/background";
import { Navbar } from "./_components/navbar";

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
