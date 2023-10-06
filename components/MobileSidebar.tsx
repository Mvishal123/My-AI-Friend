import { Menu, icons } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-[100%] w-10" />
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0 w-20 bg-secondary">
          <div className="pt-8 h-full">
            <Sidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
