import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SidebarHeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarHeader = ({ collapsed, setCollapsed }: SidebarHeaderProps) => {
  // sets the icon displayed when sidebar is collapsed or expanded
  const Icon = collapsed ? ArrowRightToLine : ArrowLeftToLine;

  return (
    <div className="">
      <div
        className={cn(
          collapsed ? "justify-end" : "justify-between",
          "flex border-b-[1px] border-stroke-color items-center gap-x-4 px-[22px] py-[20px]"
        )}
      >
        <div
          className={cn(
            collapsed
              ? "h-[50px] w-[50px] object-contain"
              : "w-[151px] h-[50px] object-cover",
            "max-md:hidden relative flex items-center justify-center transition-all ease-in-out"
          )}
        >
          <Image
            src={collapsed ? "/assets/logo-small.png" : "/assets/wfalogo.png"}
            alt="company_logo"
            className={cn(collapsed ? "object-contain" : "object-contain")}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Button
          size={"icon"}
          variant={"ghost"}
          className="bg-gray-100 px-1"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Icon className={cn("h-6 w-6")} />
        </Button>
      </div>
    </div>
  );
};

export default SidebarHeader;
