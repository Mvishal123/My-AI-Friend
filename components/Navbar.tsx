"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkle } from "lucide-react";
import { Poppins, Dela_Gothic_One } from "next/font/google";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";

import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

const font = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center border border-primary/10 bg-secondary px-2 py-4">
      <MobileSidebar />
      <Link href={"/"}>
        <h1
          className={cn(
            "text-4xl text-primary font-bold AI-color",
            font.className
          )}
        >
          <span className="AI-header-color">Fri</span>
          <span className="text-slate-800 dark:text-white">AI</span>
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Button size="sm" className="text-white" variant={"buttonpremium"}>
          Upgrade
          <Sparkle className="w-4 h-4 fill-white ml-2" />
        </Button>
        <ModeToggle />
        <div className="">
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
