"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutGrid,
  Calendar,
  Bell,
  Users,
  BarChart3,
  Star,
  Settings,
  User,
  LogOut,
  ChevronLeft,
} from "lucide-react";

import { cn } from "@/lib/utils";

const menuItems = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/calendar",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: Users,
    label: "Team",
    href: "/team",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Star,
    label: "Bookmarks",
    href: "/bookmarks",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];

const footerItems = [
  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/logout",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex">
      <div
        className={cn(
          "relative h-full transition-all duration-300 ease-in-out",
          collapsed ? "w-16" : "w-64"
        )}
      >
        <div className="absolute inset-0 bg-[#111827] text-white flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                CN
              </div>
              {!collapsed && (
                <span className="ml-3 text-lg font-semibold">Menu</span>
              )}
            </div>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-8 h-8 rounded-md bg-gray-700/50 flex items-center justify-center text-gray-300 hover:bg-gray-700"
            >
              <ChevronLeft
                className={cn(
                  "h-5 w-5 transition-transform",
                  collapsed ? "rotate-180" : ""
                )}
              />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2 px-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 group"
                  >
                    <item.icon className="w-6 h-6 text-gray-200" />
                    {!collapsed && (
                      <span className="ml-3 text-gray-200">{item.label}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border-t border-gray-700">
            <ul className="space-y-2">
              {footerItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 group"
                  >
                    <item.icon className="w-6 h-6 text-gray-200" />
                    {!collapsed && (
                      <span className="ml-3 text-gray-200">{item.label}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Sidebar;
