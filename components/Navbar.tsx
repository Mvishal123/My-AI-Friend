"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkle } from "lucide-react";
import { Poppins, Dela_Gothic_One } from "next/font/google";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center border-primary/10 bg-secondary px-2 py-4">
      <Menu className="block md:hidden cursor-pointer" size={35} />
      <Link href={"/"}>
        <h1 className={cn("text-4xl text-primary font-bold", font.className)}>
          Fri<span className="text-blue-400">AI</span>
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Button size="sm" className="text-white" variant={"premium"}>
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
