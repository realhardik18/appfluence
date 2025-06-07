'use client'
import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineViewGrid,
  HiOutlineFolderOpen,
  HiOutlineCheckCircle,
  HiOutlineUserAdd,
  HiOutlineMail,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";

const navItems = [
  { label: "Overview", icon: <HiOutlineViewGrid className="w-6 h-6" />, href: "/" },
  { label: "Active Deals", icon: <HiOutlineFolderOpen className="w-6 h-6" />, href: "/deals/active" },
  { label: "Completed Deals", icon: <HiOutlineCheckCircle className="w-6 h-6" />, href: "/deals/completed" },
  { label: "Add Person", icon: <HiOutlineUserAdd className="w-6 h-6" />, href: "/people/add" },
  { label: "Outreach", icon: <HiOutlineMail className="w-6 h-6" />, href: "/outreach" },
  { label: "Negotiation", icon: <HiOutlineCurrencyDollar className="w-6 h-6" />, href: "/negotiation" },
  { label: "Onboarding", icon: <HiOutlineUserGroup className="w-6 h-6" />, href: "/onboarding" },
];

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav
      className={`bg-black text-white border-r border-zinc-800 flex flex-col min-h-screen overflow-hidden ${collapsed ? "w-16" : "w-56"} transition-all duration-300`}
    >
      <div className="flex items-center px-4 py-4 border-b border-zinc-800 h-16">
        <span
          className={`text-xl font-bold tracking-wide text-white select-none transition-all duration-300 ${
            collapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          }`}
          style={{
            minWidth: collapsed ? 0 : 110,
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition: "min-width 0.3s"
          }}
        >
          Appfluence
        </span>
        <button
          aria-label="Toggle sidebar"
          onClick={() => setCollapsed((c) => !c)}
          className="ml-auto text-zinc-400 hover:text-white transition-colors p-1 rounded focus:outline-none flex items-center justify-center"
          style={{ minWidth: 32, minHeight: 32 }}
        >
          {collapsed ? <HiChevronDoubleRight className="w-6 h-6" /> : <HiChevronDoubleLeft className="w-6 h-6" />}
        </button>
      </div>
      <ul className="flex-1 flex flex-col gap-1 mt-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md hover:bg-zinc-800 transition-colors outline-none focus:bg-zinc-800"
              tabIndex={0}
            >
              {item.icon}
              {!collapsed && <span className="text-base">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
      {/* User Profile */}
      <div className="px-4 py-4 border-t border-zinc-800 flex items-center gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-lg font-bold text-white">
            JD
          </div>
        </div>
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-medium text-white leading-tight">John Doe</span>
            <span className="text-xs mt-1">
              <span className="bg-zinc-800 text-zinc-200 px-2 py-0.5 rounded-full font-mono">{'john.doe@email.com'}</span>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
