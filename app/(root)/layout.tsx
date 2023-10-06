import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <nav>
        <Navbar />
      </nav>
      <div className="hidden md:flex mt-16 fixed w-16 flex-col inset-y-0">
        <Sidebar />
      </div>
      <main className="md:px-20 px-10 first-line:pt-16 h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
