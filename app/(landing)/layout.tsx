import Background from "./_components/background";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <>
      <Background />
        <div className="h-screen">
        <Navbar />

        <main className="md:pt-40 pt-24 pb-20 ">
          {children}
        </main>

        <Footer />
      </div>
    </>

  );
};

export default MarketingLayout;