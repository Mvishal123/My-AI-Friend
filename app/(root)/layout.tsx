import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <nav>
        <Navbar />
      </nav>
      <main className="md:px-20 px-10 first-line:pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
