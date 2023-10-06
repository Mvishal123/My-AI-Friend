"use client";
import { Home, Plus, Settings } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const Routes = [
    {
      label: "Home",
      icon: Home,
      href: "/",
      pro: false,
    },
    {
      label: "Create",
      icon: Plus,
      href: "/companion/new",
      pro: true,
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      pro: false,
    },
  ];

  const onNavigation = (url: string, pro: boolean) => {
    // protected logic

    return router.push(url);
  };
  return (
    <div className="h-full bg-secondary text-primary flex flex-col shadow-lg">
      <div className="flex justify-center p-4">
        <div className="space-y-4 flex flex-col flex-1 justify-center items-center p-3">
          {Routes.map((route) => (
            <div
              key={route.href}
              className={cn(
                "text-xs text-muted-foreground group font-medium flex flex-col gap-y-2 justify-start items-center cursor-pointer hover:text-primary hover:bg-primary/10 p-1 w-full rounded-lg transition",
                pathname === route.href && "text-primary bg-primary/10"
              )}
              onClick={() => onNavigation(route.href, route.pro)}
            >
              <route.icon />
              {route.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
