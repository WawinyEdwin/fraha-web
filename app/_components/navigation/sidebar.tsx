"use client";
import SidebarHeader from "@/components/navigation/sidebar/sidebar-header";
import { cn } from "@/lib/utils";
import React from "react";
import SidebarLinks from "@/components/navigation/sidebar/sidebar-links";
import OrganisationAvatar from "../ui/shared/organisation-avatar";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  return (
    <aside
      className={cn(
        collapsed ? "w-[120px]" : "w-[250px]",
        "fixed transition h-screen border-r-[1px] border-stroke-color bg-white flex flex-col justify-between z-50 ease-in-out duration-200"
      )}
    >
      <div>
        <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <SidebarLinks collapsed={collapsed} />
      </div>

      <div className="justify-end">
        {/* displays organisation logo and name at the bottom of sidebar */}
        <OrganisationAvatar collapsed={collapsed} />
      </div>
    </aside>
  );
};

export default Sidebar;
