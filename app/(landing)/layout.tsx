import Background from "@/components/background";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="h-screen">
      <Background />
      <Navbar />

      <main className="pt-24 pb-10 :pb-20 ">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLayout;